import { Form, Input } from "antd";
import { NamePath } from "antd/es/form/interface";
import { FC } from "react";

interface IPasswordInputProps {
  name: string;
  placeholder: string;
  dependencies: NamePath[];
}

const PasswordInput: FC<IPasswordInputProps> = ({
  name,
  placeholder,
  dependencies,
}) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      rules={[
        { required: true, message: "This field is required!" },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }

            if (name === "confirmPassword") {
              if (!value || getFieldValue("password") !== value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error("Passwords must match!"));
            } else {
              if (value.length < 6) {
                return Promise.reject(
                  new Error("Passwird must contain at least 6 characters")
                );
              }
              return Promise.resolve();
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size="large" />
    </Form.Item>
  );
};

export default PasswordInput;
