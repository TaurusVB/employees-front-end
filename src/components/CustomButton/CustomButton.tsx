import { FC, ReactNode } from "react";
import { Button, Form } from "antd";

interface ICustomButtonProps {
  children: ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  danger?: boolean;
  loading?: boolean;
}

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  htmlType = "button",
  type,
  onClick,
  danger,
  loading,
}) => {
  return (
    <Form.Item>
      <Button
        loading={loading}
        onClick={onClick}
        danger={danger}
        htmlType={htmlType}
        type={type}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

export default CustomButton;
