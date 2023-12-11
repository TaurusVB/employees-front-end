import { Form, Input } from "antd";
import { FC } from "react";

interface ICustomInputProps {
  name: string;
  placeholder: string;
  type?: string;
}

const CustomInput: FC<ICustomInputProps> = ({
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <Form.Item
      rules={[{ required: true, message: "This field is required!" }]}
      name={name}
      shouldUpdate={true}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};

export default CustomInput;
