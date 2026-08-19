import { useState } from "react";

function Calculator() {
  const [userInput, setUserInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [operand, setOperand] = useState("");
  const [isCalculated,setIsCalculated] = useState(false);

  const handleUserInput = (e) => {
    if (!e.target.matches("button")) return;
    if (e.target.value === "CE") {
      setPrevInput("");
      setUserInput("");
      setOperand("");
      setIsCalculated(false);
      return;
    }
    if(e.target.value === "." && userInput.includes(".")){
      return;
    }
    if (
      e.target.value === "+" ||
      e.target.value === "-" ||
      e.target.value === "*" ||
      e.target.value === "/" ||
      e.target.value === "%"
    ) {
      setPrevInput(userInput);
      setUserInput("");
      setOperand(e.target.value);
      setIsCalculated(false);
      return;
    }
    if(isCalculated){
      setUserInput(e.target.value);
      setIsCalculated(false);
      return;
    }
    setUserInput((prev) => prev + e.target.value);
  };

  const handleCalulations = () => {
    let result;
    switch (operand) {
      case "+":
        result = Number(prevInput) + Number(userInput);
        setUserInput(String(result));
        setOperand("");
        setIsCalculated(true);
        break;
      case "-":
        result = Number(prevInput) - Number(userInput);
        setUserInput(String(result));
        setOperand("");
        setIsCalculated(true);
        break;
      case "*":
        result = Number(prevInput) * Number(userInput);
        setUserInput(String(result));
        setOperand("");
        setIsCalculated(true);
        break;
      case "/":
        if (Number(userInput) === 0) {
          setUserInput("Error");
          return;
        }
        result = Number(prevInput) / Number(userInput);
        setUserInput(String(result));
        setOperand("");
        setIsCalculated(true);
        break;
      case "%":
        result = (Number(prevInput) * Number(userInput)) / 100;
        setUserInput(String(result));
        setOperand("");
        setIsCalculated(true);
        break;
    }
  };

  return (
    <section className="calculator-body">
      {/* Calculation Screen */}
      <div className="calculator-screen">
        <input type="text" placeholder="0" readOnly value={userInput} />
      </div>

      {/* Buttons Grid Container */}
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
          onClick={handleCalulations}
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
