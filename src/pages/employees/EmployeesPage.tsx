import { PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useSelector } from "react-redux";

import CustomButton from "../../components/CustomButton";
import {
  Employee,
  useGetAllEmployeesQuery,
} from "../../app/services/employess";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../utils/paths";
import { selectUser } from "../../features/auth/selectors";

import styles from "./employees.module.css";
import { useEffect } from "react";

const columnsType: ColumnsType<Employee> = [
  { title: "Name", dataIndex: "firstName", key: "firstName" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
];

const EmployeesPage = () => {
  const { data, isLoading } = useGetAllEmployeesQuery();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <>
      <CustomButton
        type="primary"
        onClick={() => {}}
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
