import { useEffect, useRef, useState } from "react";
import ModalBox from "./ModalBox";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalRef = useRef(null);
  const toggleModal = () => {
    openModalRef.current.focus();
    setIsModalOpen((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if(e.key === "Escape"){
      openModalRef.current.focus();
      setIsModalOpen(false)
    }
  }



  useEffect(() => {
    if(!isModalOpen) return;
    document.body.style.overflow ="hidden";
   window.addEventListener("keydown",handleKeyDown);

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown",handleKeyDown)
    }
  },[isModalOpen])
  return (
    <>
      <button className="bg-blue-500 p-2 rounded-md mt-3 relative" onClick={toggleModal} ref={openModalRef}>
        Open Modal
      </button>

      {isModalOpen && <ModalBox onClose={toggleModal}/>}
    </>
  );
};

export default Modal;
