import { Alert } from "antd";
import { FC } from "react";

interface IErrorMessageProps {
  message?: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return <Alert message={message} type="error" />;
};

export default ErrorMessage;
