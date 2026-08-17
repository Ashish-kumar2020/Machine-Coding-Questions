import { useState } from "react";
import "./App.css";
import { Heart, Loader } from "lucide-react";

import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadingRef = useRef(null);

  const handleClicked = () => {
    if (isLoading) return;

    // setIsClicked((prev) => !prev);
    setIsLoading(true);

    loadingRef.current = setTimeout(() => {
      setIsLoading(false);
      setIsClicked((prev) => !prev);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(loadingRef.current);
    };
  },[]);
  return (
    <>
      <h1>Like Button</h1>

      <section>
        <div>
          <span>Default</span>
          <button
           
            onClick={handleClicked}
            type="button"
            aria-label={isClicked ? "UnLike" : "Like"}
            aria-pressed={isClicked}
            className={`default-button ${isClicked ? "is-clicked" : "none"}`}
          >
            {isLoading ? <Loader /> : ""}
            <Heart fill={isClicked ? "red" : "none"} />
            Like
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
