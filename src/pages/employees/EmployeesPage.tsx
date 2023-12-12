import { PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";

import CustomButton from "../../components/CustomButton";
import { useGetAllEmployeesQuery } from "../../app/services/employess";

const EmployeesPage = () => {
  const { data, isLoading } = useGetAllEmployeesQuery();

  return (
    <>
      <CustomButton
        type="primary"
        onClick={() => {}}
        icon={<PlusCircleOutlined />}
      >
        Add employee
      </CustomButton>
      <Table></Table>
    </>
  );
};

export default EmployeesPage;
