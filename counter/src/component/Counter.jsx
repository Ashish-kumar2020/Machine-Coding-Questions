
import { useDispatch, useSelector } from "react-redux";
import { incrementByAdd,decrement,increment } from "../feature/counterSlice";


const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
 
  const incrementFun = () => {
    dispatch(increment())
  }
  const decrementFun = () => {
    dispatch(decrement())
  }

  const addBy = () => {
    dispatch(incrementByAdd(10))
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={incrementFun}>Increment</button>
      <button onClick={decrementFun}>Decrement</button>
       <button onClick={addBy}>Add By 10</button> 
    </div>
  )
}

export default Counter