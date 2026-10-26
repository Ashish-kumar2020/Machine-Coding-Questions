import { useEffect, useState } from "react"



export const useDebounce = (searchValue: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(()=>{
        const timerId = setTimeout(() => {
            setDebouncedValue(searchValue);
        },delay);

        return () => clearTimeout(timerId)
    },[searchValue,delay]);

    return debouncedValue

}