import { PlusCircleOutlined } from "@ant-design/icons";
import { Form, Table } from "antd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import CustomButton from "../../components/CustomButton";
import {
  Employee,
  useAddEmployeeMutation,
  useGetAllEmployeesQuery,
} from "../../app/services/employess";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../utils/paths";
import { selectUser } from "../../features/auth/selectors";
import EmployeeForm from "../../components/EmployeeForm";
import ModalEmployee from "../../components/ModalEmployee";
import { isErrorWithMessage } from "../../utils/isErrorWithMessage";

import styles from "./employees.module.css";
import toast from "react-hot-toast";

const columnsType: ColumnsType<Employee> = [
  { title: "Name", dataIndex: "firstName", key: "firstName" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
];

const EmployeesPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [error, setError] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const { data, isLoading } = useGetAllEmployeesQuery();
  const [addEmployee] = useAddEmployeeMutation();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const showModal = () => {
    setIsOpenModal(true);
  };

  const hideModal = () => {
    setIsOpenModal(false);
  };

  const handleAddEmployee = async () => {
    setConfirmLoading(true);
    try {
      const data: Employee = await form.validateFields();

      await addEmployee(data).unwrap();

      form.resetFields();

      toast.success('Employees created successfully!')

      hideModal();
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

  return (
    <>
      <ModalEmployee
        confirmLoading={confirmLoading}
        isOpenModal={isOpenModal}
        hideModal={hideModal}
        addEmployee={handleAddEmployee}
      >
        <EmployeeForm
          form={form}
          title="Add employee"
          onFinish={handleAddEmployee}
          error={error}
        />
      </ModalEmployee>

      <CustomButton
        type="primary"
        onClick={showModal}
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
          return { onClick: () => navigate(`${Paths.employee}/${record.id}`) };
        }}
        rowClassName={styles.row}
      ></Table>
    </>
  );
};

export default EmployeesPage;
