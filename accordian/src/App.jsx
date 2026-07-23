import "./App.css";
import Accordion from "./component/Accordian";
import { AccordianData } from "../data";
import { useState } from "react";

function App() {
  const [openAccordions, setOpenAccordions] = useState(["accordian-1","accordian-3"]);

  const toggleAccordion = (id) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((val) => val !== id) : [...prev, id],
    );
  };

  const expandAll = () => {
    setOpenAccordions(openAccordions.length === AccordianData.length ? [] :AccordianData.map((val) => val.id) )
  }

  // const collapseAll = () => {
  //   setOpenAccordions([])
  // }
  return (
    <>
      <button className="border border-black p-2 m-2" onClick={expandAll}>Toggle All</button>
      {/* <button className="border border-black p-2 m-2" onClick={collapseAll}>Collapse All</button> */}
      {AccordianData.map((item) => (
        <Accordion
          title={item.title}
          description={item.description}
          key={item.id}
          onToggle={() => toggleAccordion(item.id)}
          isOpen={openAccordions.includes(item.id)}
         
        />
      ))}
    </>
  );
}

export default App;

/*

------------------------ One Accordion Open at a time -------------------------------

import { useState } from "react";
import Accordion from "./component/Accordion";
import { AccordionData } from "../data";

function App() {
  const [activeAccordionId, setActiveAccordionId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordionId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {AccordionData.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          description={item.description}
          isOpen={activeAccordionId === item.id}
          onToggle={() => toggleAccordion(item.id)}
        />
      ))}
    </>
  );
}

export default App;


--------------------- Multiple Accordion Open and CLose at a time ----------------
  const toggleAccordion = (id) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((val) => val !== id) : [...prev, id],
    );
  };


--------------------- Exapand All and Collapse All ---------------------
function App() {
  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (id) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((val) => val !== id) : [...prev, id],
    );
  };

  const expandAll = () => {
    setOpenAccordions(AccordianData.map((val) => val.id))
  }

  const collapseAll = () => {
    setOpenAccordions([])
  }
  return (
    <>
      <button className="border border-black p-2 m-2" onClick={expandAll}>Expand All</button>
      <button className="border border-black p-2 m-2" onClick={collapseAll}>Collapse All</button>
      {AccordianData.map((item) => (
        <Accordion
          title={item.title}
          description={item.description}
          key={item.id}
          onToggle={() => toggleAccordion(item.id)}
          isOpen={openAccordions.includes(item.id)}
        />
      ))}
    </>
  );
}


*/
