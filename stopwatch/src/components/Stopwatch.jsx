import { useEffect, useRef, useState } from "react";
import DisplayTimer from "./DisplayTimer";
import Button from "./Button";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isDisabled,setIsDisabled] = useState(false);
  const [isPaused,setIsPaused] = useState(false);

  const timerRef = useRef(null);

  const onStart = () => {
    if(timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
        setTimer((sec) => sec + 1 );
    },1000);
    setIsDisabled(true);
    console.log("Start")
  }

  const onPause= () => {
    clearInterval(timerRef.current)
    timerRef.current = null;
     setIsDisabled(false);
     setIsPaused((prev) => !prev);
  }

  const onStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimer(0);
    setIsDisabled(false);
  }

  useEffect(() => {
    return () => clearInterval(timerRef.current);
}, []);
  

  return (
    <div className="text-center m-4">
      <div className="mb-4">Stopwatch Machine Coding Question</div>
      <DisplayTimer timer={timer} />
      <div className="flex gap-10 justify-center mt-4">
        <Button title="start" onClick={onStart} disabled={isDisabled}/>
        <Button title="pause" onClick={onPause} isPaused={isPaused}/>
        <Button title="stop" onClick={onStop}/>
      </div>
    </div>
  );
};

export default Stopwatch;
