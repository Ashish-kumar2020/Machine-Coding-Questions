import { accordionData } from "./data.js";

const accordionContainer = document.querySelector(".accordion-container");

let activeAccordionIds = [];

function createElement(tagName) {
  return document.createElement(tagName);
}

function handleAccordionOpen(id, accordionDescription, accordionTitle) {
  if (activeAccordionIds.includes(id)) {
    // Close accordion
    accordionDescription.classList.add("active");

    const index = activeAccordionIds.findIndex(
      (currentId) => currentId === id
    );

    activeAccordionIds.splice(index, 1);

    accordionTitle.setAttribute("aria-expanded", "false");

    return;
  }

  // Open accordion
  activeAccordionIds.push(id);

  accordionDescription.classList.remove("active");

  accordionTitle.setAttribute("aria-expanded", "true");
}

function init() {
  accordionData.forEach((item) => {
    const parentContainer = createElement("div");
    const accordionTitle = createElement("button");
    const accordionDescription = createElement("p");

    // IDs
    accordionTitle.id = `accordion-title-${item.id}`;
    accordionDescription.id = `accordion-description-${item.id}`;

    // Content
    accordionTitle.textContent = item.title;
    accordionDescription.textContent = item.content;

    // Classes
    accordionTitle.classList.add("accordion-title");
    accordionDescription.classList.add(
      "accordion-description",
      "active"
    );

    // Button accessibility
    accordionTitle.setAttribute("type", "button");
    accordionTitle.setAttribute("aria-expanded", "false");
    accordionTitle.setAttribute(
      "aria-controls",
      accordionDescription.id
    );

    // Description accessibility
    accordionDescription.setAttribute("role", "region");
    accordionDescription.setAttribute(
      "aria-labelledby",
      accordionTitle.id
    );

    // Event
    accordionTitle.addEventListener("click", () => {
      handleAccordionOpen(
        item.id,
        accordionDescription,
        accordionTitle
      );
    });

    parentContainer.append(accordionTitle);
    parentContainer.append(accordionDescription);

    accordionContainer.append(parentContainer);
  });
}

init();