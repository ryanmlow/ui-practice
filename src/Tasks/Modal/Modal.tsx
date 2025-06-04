import { useState } from "react";
import useOutsideClick from "./useOutsideClick";

interface ModalProps {
  title: string;
  content: string;
  closeOnOutsideClick: boolean;
}

const Modal = (props: ModalProps) => {
  const { title, content, closeOnOutsideClick } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const handleClickOutside = () => setModalOpen(false);

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div>
      <button
        className="cursor-pointer rounded-4xl bg-purple-300 px-4 py-2 text-black hover:text-white"
        onClick={() => setModalOpen(true)}
      >
        Open modal
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-brightness-50 transition-opacity">
          <div
            ref={closeOnOutsideClick ? ref : null}
            className="w-3xl rounded-lg bg-white p-18 shadow-lg"
          >
            <h2 className="mb-4 text-4xl font-bold text-black">{title}</h2>
            <p className="mb-4 text-black">{content}</p>
            <button
              className="cursor-pointer rounded-4xl bg-purple-300 px-4 py-2 text-white hover:bg-purple-400"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
