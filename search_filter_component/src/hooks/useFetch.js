import { useEffect, useState } from "react";



function useFetch(url){
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData(){
            try {
                setIsLoading(true);
                setError(null);
                const response = await fetch(url,{
                    signal: controller.signal
                });
                if(!response.ok){
                    throw new Error("Error while fetching the data");
                }
                const result = await response.json();
                setData(result)
            } catch (error) {
                if(error.name === "AbortError"){
                    return;
                }
                setError(error.message);
            }finally{
                setIsLoading(false)
            }
        }

        fetchData();

        return () => {
            controller.abort()
        }

    },[url]);

    return {
        data,
        isLoading,
        error
    }
}


export default useFetch;