import { useState } from "react";
import ModalBox from "./ModalBox";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      <button className="bg-blue-500 p-2 rounded-md mt-3 relative" onClick={toggleModal}>
        Open Modal
      </button>

      {isModalOpen && <ModalBox onClose={toggleModal}/>}
    </>
  );
};

export default Modal;
