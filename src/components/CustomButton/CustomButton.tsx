import { FC, ReactNode } from "react";
import { Button, Form } from "antd";

interface ICustomButtonProps {
  children: ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?:
    | "link"
    | "default"
    | "text"
    | "primary"
    | "dashed"
    | "ghost"
    | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: ReactNode;
}

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  htmlType = "button",
  type,
  onClick,
  danger,
  loading,
  shape,
  icon,
}) => {
  return (
    <Form.Item>
      <Button
        loading={loading}
        onClick={onClick}
        danger={danger}
        htmlType={htmlType}
        type={type}
        shape={shape}
        icon={icon}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

export default CustomButton;
