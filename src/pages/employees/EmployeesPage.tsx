import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Form, Table } from "antd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import CustomButton from "../../components/CustomButton";
import {
  Employee,
  useAddEmployeeMutation,
  useGetAllEmployeesQuery,
} from "../../app/services/employess";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../features/auth/selectors";
import EmployeeForm from "../../components/EmployeeForm";
import ModalEmployee from "../../components/ModalEmployee";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";

import styles from "./employees.module.css";

const columnsType: ColumnsType<Employee> = [
  { title: "Name", dataIndex: "firstName", key: "firstName" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Action",
    key: "delete",
    render: () => <DeleteOutlined className={styles.deleteIcon} />,
  },
];

const EmployeesPage = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [error, setError] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [existEmployeeData, setExistEmployeeData] = useState<Employee>();

  const [AddForm] = Form.useForm();
  const [EditForm] = Form.useForm();

  const { data, isLoading } = useGetAllEmployeesQuery();
  const [addEmployee] = useAddEmployeeMutation();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  useEffect(() => {
    if (existEmployeeData !== null) {
      EditForm.setFieldsValue(existEmployeeData);
    }
  }, [EditForm, existEmployeeData]);

  const hideAddModal = () => {
    setIsOpenAddModal(false);
    AddForm.resetFields();
  };

  const hideEditModal = () => {
    setIsOpenEditModal(false);
    EditForm.resetFields();
  };

  const handleAddEmployee = async () => {
    setConfirmLoading(true);
    try {
      const data: Employee = await AddForm.validateFields();

      await addEmployee(data).unwrap();

      AddForm.resetFields();

      toast.success("Employees created successfully!");

      hideAddModal();
    } catch (error) {
      const maybeError = isErrorWithMessage(error);

      if (maybeError) {
        setError(error.data.message);
      } else {
        setError("Something went wrong...");
      }
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleEditEmployee = async () => {
    console.log(existEmployeeData);
  };

  return (
    <>
      <ModalEmployee
        confirmLoading={confirmLoading}
        isOpenModal={isOpenAddModal}
        hideModal={hideAddModal}
        actionEmployee={handleAddEmployee}
      >
        <EmployeeForm
          form={AddForm}
          title="Add employee"
          onFinish={handleAddEmployee}
          error={error}
        />
      </ModalEmployee>

      <ModalEmployee
        confirmLoading={confirmLoading}
        isOpenModal={isOpenEditModal}
        hideModal={hideEditModal}
        actionEmployee={handleEditEmployee}
      >
        <EmployeeForm
          title="Edit employee"
          error={error}
          onFinish={handleEditEmployee}
          employee={existEmployeeData}
          form={EditForm}
        />
      </ModalEmployee>

      <CustomButton
        type="primary"
        onClick={() => setIsOpenAddModal(true)}
        icon={<PlusCircleOutlined />}
      >
        Add employee
      </CustomButton>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columnsType}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => {
              setExistEmployeeData(record);
              setIsOpenEditModal(true);
            },
          };
        }}
        rowClassName={styles.row}
      ></Table>
    </>
  );
};

export default EmployeesPage;
