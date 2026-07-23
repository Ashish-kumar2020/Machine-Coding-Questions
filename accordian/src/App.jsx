import "./App.css";
import Accordion from "./component/Accordian";
import { AccordianData } from "../data";
import { useState } from "react";

function App() {

  const [openAccordions,setOpenAccordions] = useState([]);


  const toggleAccordion = (id) => {
    setOpenAccordions((prev) => prev.includes(id) ? prev.filter((val) => val !== id) : [...prev,id]);
  };
  return (
    <>
      {AccordianData.map((item) => (
        <Accordion
          title={item.title}
          description={item.description}
          key={item.id}
          onToggle={() => toggleAccordion(item.id)}
          isOpen={openAccordions.includes(item.id) }
        />
      ))}
    </>
  );
}

export default App;
