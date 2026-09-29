import { useMemo, useState } from "react";
import useFetch  from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";

const SearchComponent = () => {
  const [userSearch, setUserSearch] = useState("");
  const [rating,setRating] = useState(null);
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");
  const {debouncedValue} = useDebounce(userSearch,1000);

  const filteredProducts = useMemo(() => {
  let products = data?.products || [];

  // search
  products = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedValue.toLowerCase()));

  // rating
  if(rating){
    products = products.filter((product) => product.rating >= rating)
  }

  // category

  // price

  return products;
}, [data, debouncedValue, rating]);


  const handleRating = (rate) =>{
 setRating(rate);
  }

  if (isLoading) {
    return <h3>Loading Products.....</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search for product..."
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
      </div>
      <div>
        <span>Rating: </span>
        <button type="button" value="4" onClick={() => handleRating("4")}>
          4
        </button>
        <button type="button" value="3" onClick={() => handleRating("3")}>
          3
        </button>

        {
            filteredProducts.map((val) => {
                return (<div key={val.id}>
                     <span>{val.title}</span>
                     <span>{val.rating}</span>
                </div>)
            })
        }
      </div>
    </>
  );
};

export default SearchComponent;
