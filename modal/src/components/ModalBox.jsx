const ModalBox = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 cursor-pointer"
     onClick={onClose}
    >
      <div
        className="bg-green-900 border border-white shadow-xl text-white transition-all duration-300 ease-in-out flex flex-col w-96 h-96 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 pt-4 pb-4 border-b border-green-700">
          <h3>Modal Machine Coding Question</h3>
          <div className="flex gap-3">
            <button
              aria-label="Close modal"
                 onClick={onClose}
              className="font-bold px-1"
            >
              X
            </button>
          </div>
        </div>

        <div className="p-4 flex-1">
          <span>
            This is Modal Machine Coding Question Implemented using react +
            javascript. For styling we have used Tailwind v3.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
