import { useState } from "react"
import useDebounce from "./hooks/useDebounce";
import useFetch from "./hooks/useFetch";
import HighLightText from "./HighLightText";
import "./App.css"

function App() {
  

  const [userSearch,setUserSearch] = useState("");
  const [selectedIndex,setSelectedIndex] = useState(-1);

  const {debouncedValue} = useDebounce(userSearch,1000);
  const url = debouncedValue ? `https://dummyjson.com/products/search?q=${debouncedValue}` : "https://dummyjson.com/products"
  const {isLoading,data,error} = useFetch(url)


  if(isLoading){
    return <h2>Loading....</h2>
  }

  if(error){
    return <h3>{error.message}</h3>
  }

  const handleKeyDown = (e) => {
    switch(e.key){
      case "ArrowUp":
          setSelectedIndex((prev) => Math.max(prev - 1, -1 ));
          console.log("ArrowUp",selectedIndex);
          break;
      case "ArrowDown":
        setSelectedIndex((prev) => Math.min(prev + 1 , data.products.length - 1))
        console.log("ArrowDown",selectedIndex);
          break;
      case "Enter":
        if(selectedIndex >= 0){
          const selectedProduct = data?.products[selectedIndex];
          console.log(selectedProduct.title);
          setUserSearch(selectedProduct.title);
          setSelectedIndex(-1)
        }
        break;
        // setUserSearch()
      
    }
  }

  


  return (
    <>
      <h3>Autocomplete / Typeahead</h3>
    <input type="text" value={userSearch} onChange={(e) => setUserSearch(e.target.value)} onKeyDown={handleKeyDown}/>
      {
        data?.products?.map((product,index) =>{
          return (
            <div key={product.id} onClick={() => setUserSearch(product.title)} className={selectedIndex === index ? "selected" : ""}>
              <HighLightText text={product.title} search={userSearch}/>
            </div>
          )
        })
      }
    </>
  ) 
}

export default App
