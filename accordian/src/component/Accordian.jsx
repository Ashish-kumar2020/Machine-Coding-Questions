import { ChevronDown, ChevronUp } from "lucide-react";

const Accordion = ({ title, description, isOpen, onToggle }) => {
    
  return (
    <div className="border border-black w-full  p-2 mt-4">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex justify-between w-full cursor-pointer"
      >
        <h3>{title}</h3>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      <div
        className={`
        overflow-hidden
        transition-all
        duration-1000
        ${isOpen ? "max-h-96" : "max-h-0"}
  `}
      >
        {description}
      </div>
    </div>
  );
};

export default Accordion;
