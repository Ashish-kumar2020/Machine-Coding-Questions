import { useState } from "react";
import "./App.css";

function App() {
  const [currFontSize, setCurrFontSize] = useState("");
  const [error,setError] = useState("");
  return (
    <>
      <h3>Live Font Size Controller Machine Coding</h3>
      <div>
        <label htmlFor="enterYourFontSize">Enter the Font Size : </label>
        <input
          type="number"
          min="1"
          id="enterYourFontSize"
          value={currFontSize}
          onChange={(e) => {
            const value = e.target.value;
            if(value === ""){
              setError("");
              setCurrFontSize("")
              return;
            }
            if (Number(value) <= 0) {
              setError("Font size cannot be zero");
              return;
            }
            setError("");
            setCurrFontSize(e.target.value);
          }}
          placeholder="Enter the Font Size...."
        />
      </div>
      <div>
        <span style={{ fontSize: `${currFontSize}px` }}>
          This heading font gets changed on user input
        </span>
        <p>{error}</p>
      </div>
    </>
  );
}

export default App;
