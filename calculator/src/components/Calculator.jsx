import { useState } from "react";

function Calculator() {
  const [userInput, setUserInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [operand, setOperand] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateResult = (first, second, operator) => {
    const num1 = Number(first);
    const num2 = Number(second);

    switch (operator) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;

      case "*":
        return num1 * num2;

      case "/":
        if (num2 === 0) return "Error";
        return num1 / num2;

      case "%":
        return (num1 * num2) / 100;

      default:
        return num2;
    }
  };

  const handleUserInput = (e) => {
    if (!e.target.matches("button")) return;

    const value = e.target.value;

    // Clear
    if (value === "CE") {
      setPrevInput("");
      setUserInput("");
      setOperand("");
      setIsCalculated(false);
      return;
    }

    // Decimal
    if (value === "." && userInput.includes(".")) {
      return;
    }

    // Operator
    if (["+", "-", "*", "/", "%"].includes(value)) {
      // Chained calculation
      if (operand && userInput !== "") {
        const result = calculateResult(prevInput, userInput, operand);

        if (result === "Error") {
          setUserInput("Error");
          setPrevInput("");
          setOperand("");
          return;
        }

        setPrevInput(String(result));
      } else {
        setPrevInput(userInput);
      }

      setUserInput("");
      setOperand(value);
      setIsCalculated(false);

      return;
    }

    // New number after calculation
    if (isCalculated) {
      setUserInput(value);
      setIsCalculated(false);
      return;
    }

    // Normal number input
    setUserInput((prev) => prev + value);
  };

  const handleCalculations = () => {
    if (!operand || !prevInput || !userInput) {
      return;
    }

    const result = calculateResult(prevInput, userInput, operand);

    if (result === "Error") {
      setUserInput("Error");
      setPrevInput("");
      setOperand("");
      return;
    }

    setUserInput(String(result));
    setPrevInput("");
    setOperand("");
    setIsCalculated(true);
  };

  return (
    <section className="calculator-body">
      {/* Calculation Screen */}
      <div className="calculator-screen">
        <input
          type="text"
          placeholder="0"
          readOnly
          value={userInput}
        />
      </div>

      {/* Buttons */}
      <div className="calculator-grid" onClick={handleUserInput}>
        <button className="generic-buttons tool-btn" value="(">
          (
        </button>

        <button className="generic-buttons tool-btn" value=")">
          )
        </button>

        <button className="generic-buttons tool-btn" value="%">
          %
        </button>

        <button className="generic-buttons action-btn" value="CE">
          CE
        </button>

        <button className="generic-buttons" value="7">
          7
        </button>

        <button className="generic-buttons" value="8">
          8
        </button>

        <button className="generic-buttons" value="9">
          9
        </button>

        <button className="generic-buttons op-btn" value="/">
          /
        </button>

        <button className="generic-buttons" value="4">
          4
        </button>

        <button className="generic-buttons" value="5">
          5
        </button>

        <button className="generic-buttons" value="6">
          6
        </button>

        <button className="generic-buttons op-btn" value="*">
          *
        </button>

        <button className="generic-buttons" value="1">
          1
        </button>

        <button className="generic-buttons" value="2">
          2
        </button>

        <button className="generic-buttons" value="3">
          3
        </button>

        <button className="generic-buttons op-btn" value="-">
          -
        </button>

        <button className="generic-buttons" value="0">
          0
        </button>

        <button className="generic-buttons" value=".">
          .
        </button>

        <button
          className="generic-buttons equals-btn"
          onClick={handleCalculations}
        >
          =
        </button>

        <button className="generic-buttons op-btn" value="+">
          +
        </button>
      </div>
    </section>
  );
}

export default Calculator;