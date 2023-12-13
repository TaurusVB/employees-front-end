import { Modal } from "antd";
import { FC, ReactNode } from "react";

interface IModalEmployeeProps {
  isOpenModal: boolean;
  hideModal: () => void;
  children: ReactNode;
  confirmLoading: boolean;
  addEmployee: () => void;
}

const ModalEmployee: FC<IModalEmployeeProps> = ({
  isOpenModal,
  hideModal,
  children,
  confirmLoading,
  addEmployee,
}) => {
  return (
    <Modal
      confirmLoading={confirmLoading}
      centered
      open={isOpenModal}
      onOk={addEmployee}
      onCancel={hideModal}
      okText="Add"
      cancelText="Cancel"
    >
      {children}
    </Modal>
  );
};

export default ModalEmployee;
