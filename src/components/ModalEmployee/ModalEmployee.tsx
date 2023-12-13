import { Modal } from "antd";
import { FC, ReactNode } from "react";

interface IModalEmployeeProps {
  isOpenModal: boolean;
  hideModal: () => void;
  children: ReactNode;
  confirmLoading: boolean;
  actionEmployee: () => void;
}

const ModalEmployee: FC<IModalEmployeeProps> = ({
  isOpenModal,
  hideModal,
  children,
  confirmLoading,
  actionEmployee,
}) => {
  return (
    <Modal
      confirmLoading={confirmLoading}
      centered
      open={isOpenModal}
      onOk={actionEmployee}
      onCancel={hideModal}
      okText="Add"
      cancelText="Cancel"
    >
      {children}
    </Modal>
  );
};

export default ModalEmployee;
