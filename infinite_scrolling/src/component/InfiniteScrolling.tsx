import { useEffect, useRef, useState } from "react";

const InfiniteScrolling = () => {
  const [count, setCount] = useState(1000);
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingRef = useRef(false);
  useEffect(() => {
    const updateCount = () => {
      try {
        if(isLoadingRef.current){
            return;
        }
        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight 
        ) {
          isLoadingRef.current = true;
          setIsLoading(true);
          console.log("Triigered");
          setCount((prev) => prev + 50);
        }
      } catch (error) {
        console.log(error);
      } finally {
        isLoadingRef.current = false;
        setIsLoading(false);
      }
    };



    window.addEventListener("scroll", updateCount);

    return () => window.removeEventListener("scroll", updateCount);
  }, []);
  const element = [];
  for (let i = 0; i < count; i++) {
    element.push(<div key={i}>{i}</div>);
  }

  console.log(element.length);

  return <div>{isLoading ? "Loading" : element}</div>;
};

export default InfiniteScrolling;
