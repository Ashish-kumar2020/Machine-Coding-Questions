import { accordionData } from "./data.js";

console.log("Accordion Machine Coding Question");

const accordionContainer = document.querySelector(".accordion-container");

console.log(accordionData);

function createElement(tagName) {
  const ele = document.createElement(tagName);
  return ele;
}

let currentActiveAccordion = null;

function handleAccordionOpen( accordionDescription) {
    console.log(currentActiveAccordion,accordionDescription)


if(currentActiveAccordion === accordionDescription){
    accordionDescription.classList.add("active");
    currentActiveAccordion = null;
    return;
}
if(currentActiveAccordion){
    currentActiveAccordion.classList.add("active");
}
accordionDescription.classList.remove("active");
currentActiveAccordion = accordionDescription
}

function init() {
  accordionData.forEach((ele) => {
    const parentContainer = createElement("div");
    const accordionTitle = createElement("button");
    const accordionDescription = createElement("p");

    accordionTitle.textContent = ele.title;
    accordionDescription.textContent = ele.content;

    accordionTitle.classList.add("accordion-title");
    accordionDescription.classList.add("accordion-description", "active");

    accordionTitle.addEventListener("click", () => {
      handleAccordionOpen(accordionDescription);
    });

    parentContainer.append(accordionTitle);
    parentContainer.append(accordionDescription);

    accordionContainer.append(parentContainer);
  });
}

init();
