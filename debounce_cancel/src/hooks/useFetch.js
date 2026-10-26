// https://dummyjson.com/products

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Error while fetching the Products");
        }
        const result = await response.json();
        setData(result?.products);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        setError(error.message || "Something went wrong");
        console.log("Error:", error.message);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { isLoading, data, error };
};
