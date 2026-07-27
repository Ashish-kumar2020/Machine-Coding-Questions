import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DES" });
  };
  const addBy = () => {
    dispatch({type: "ADD",payload:10})
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
       <button onClick={addBy}>Add By 10</button>
    </>
  );
}

export default App;
