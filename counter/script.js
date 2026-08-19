console.log("Counter Machine Coding Problem");

const counterContainer = document.getElementById("counter-container");
const counterDisplaySpan = document.getElementById("counter-value");

let counterValue = 0;

function renderValue() {
  counterDisplaySpan.textContent = counterValue;
}

function updateCounterValue(value) {
  counterValue = Math.max(0, counterValue + value);
  renderValue();
}

counterContainer.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  if (e.target.dataset.action === "reset") {
    counterValue = 0;
    renderValue();
    return;
  }
  updateCounterValue(Number(e.target.value));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    counterValue = 0;
    renderValue();
    return;
  }
  if (e.key === "ArrowUp") {
    updateCounterValue(e.shiftKey ? 10 : 1);
  }

  if (e.key === "ArrowDown") {
    updateCounterValue(e.shiftKey ? -10 : -1);
  }
});

renderValue();
