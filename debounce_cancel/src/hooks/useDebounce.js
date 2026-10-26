import { useEffect, useState } from "react"


export const useDebounce = (value,delay) => {
    const [debouncedResult,setDebouncedResult] = useState(value);

    useEffect(() => {
       const timerId = setTimeout(() => {
        setDebouncedResult(value)
       },delay);

       return () => {
        clearTimeout(timerId);
       }
    },[value,delay]);

    return debouncedResult
    
}