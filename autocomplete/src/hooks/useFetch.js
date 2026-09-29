import { useEffect } from "react";
import { useState } from "react";



function useFetch(url){
    const [isLoading,setIsLoading] = useState(false);
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);


    useEffect(() => {
        if(!url) return;
        const controller = new AbortController();
        async function fetchApi(){
            try {
                const response = await fetch(url,{
                    signal: controller.signal
                });
                if(!response.ok){
                    throw new Error("Api cancelled")
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                if(error.name === "AbortError"){
                    return;
                }
                setError(error.message);
            }finally{
                setIsLoading(false);
            }

        }

        fetchApi()

        return () => {
            controller.abort();
        }
    },[url]);

    return {
        isLoading,data,error
    }
};

export default useFetch;