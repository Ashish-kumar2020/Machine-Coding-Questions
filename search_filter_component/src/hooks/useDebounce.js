import { useEffect, useState } from "react";



function useDebounce(search, delay){
    const [debouncedValue,setDebouncedvalue] = useState(search);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedvalue(search)
        },delay);

        return () => {
            clearTimeout(timerId)
        }
    },[search,delay]);

    return {
        debouncedValue
    }
}

export default useDebounce;