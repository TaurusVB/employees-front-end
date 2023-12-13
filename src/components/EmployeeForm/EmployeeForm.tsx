import { FC } from "react";
import { Employee } from "../../app/services/employess";
import { Card, Form, FormInstance, Space } from "antd";
import CustomInput from "../CustomInput";
import ErrorMessage from "../ErrorMessage";

interface IEmployeeFormProps<T> {
  onFinish: (values: T) => void;
  btnText?: string;
  title: string;
  error?: string;
  employee?: T;
  form: FormInstance<T>;
}

const EmployeeForm: FC<IEmployeeFormProps<Employee>> = ({
  onFinish,
  btnText,
  title,
  employee,
  error,
  form,
}) => {
  return (
    <Card
      title={title}
      style={{ width: "30rem", backgroundColor: "transparent", border: "none" }}
    >
      <Form
        form={form}
        name="employee-form"
        onFinish={onFinish}
        initialValues={employee}
      >
        <CustomInput type="text" name="firstName" placeholder="First name" />
        <CustomInput type="text" name="lastName" placeholder="Last name" />
        <CustomInput type="text" name="age" placeholder="Age" />
        <CustomInput type="text" name="address" placeholder="Address" />
        {error && (
          <Space>
            <ErrorMessage message={error} />
          </Space>
        )}
      </Form>
    </Card>
  );
};

export default EmployeeForm;
