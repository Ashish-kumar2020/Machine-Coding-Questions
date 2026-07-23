import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Accordion = ({ title, description }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };
  return (
    <div className="border border-black w-full  p-2 mt-4">
      <button
        onClick={toggleAccordion}
        aria-expanded={isAccordionOpen}
        className="flex justify-between w-full cursor-pointer"
      >
        <h3>{title}</h3>
        {isAccordionOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isAccordionOpen && <div className="mt-3">{description}</div>}
    </div>
  );
};

export default Accordion;
