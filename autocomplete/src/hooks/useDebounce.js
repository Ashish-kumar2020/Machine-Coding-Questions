import { useEffect } from "react";
import { useState } from "react";


function useDebounce(value,delay){
    const [debouncedValue,setDebouncedValue] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        },delay);

        return () => {
            clearTimeout(timerId);
        }
    },[value,delay]);

    return {
        debouncedValue
    }
}

export default useDebounce;