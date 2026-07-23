import "./App.css";
import Accordion from "./component/Accordian";
import { AccordianData } from "../data";
import { useState } from "react";

function App() {
  const [isAccordionActive, setIsAccordionActive] = useState(null);

  const toggleAccordion = (id) => {
    setIsAccordionActive((prev) => (prev === id ? null : id));
  };
  return (
    <>
      {AccordianData.map((item) => (
        <Accordion
          title={item.title}
          description={item.description}
          key={item.id}
          onToggle={() => toggleAccordion(item.id)}
          isOpen={isAccordionActive === item.id}
        />
      ))}
    </>
  );
}

export default App;
