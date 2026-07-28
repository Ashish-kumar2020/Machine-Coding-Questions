import { useEffect, useState } from "react";
import ProgressMeter from "./ProgressMeter";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return prev;
        }

        return prev + 1;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Progress Bar Machine Coding Question</h2>

      <ProgressMeter currProgress={progress} />
    </div>
  );
};

export default Progress;