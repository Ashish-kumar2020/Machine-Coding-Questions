


export const fetchProductAPI = async () => {
    const response = await fetch("https://dummyjson.com/products");

    if(!response.ok){
        throw new Error("Failed to fetch Products");
    }

    return response.json();
};


