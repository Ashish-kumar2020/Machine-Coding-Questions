
import { useState } from 'react';

import './App.css'
import { useFetch } from './hooks/useFetch';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search,500);
  const {isLoading,data,error} = useFetch("https://dummyjson.com/products");
  
  if(isLoading){
    return <h1>Loading Products....</h1>
  }
  if(error){
    return <h2>{error}</h2>
  }

  const filteredSearch = data.filter((val) => val.title.toLowerCase().includes(debouncedValue.toLowerCase()))
  

  return (
   <>
    <h3>Debounce Search With Cancel</h3>

    <div>
      <input type="text" name="searchquery" value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>

    <div>
      <ul>
      {
        filteredSearch.map((prod) => (
          <li key={prod.id}>{prod.title}</li>
        ))
      }
      </ul>
    </div>
   </>
  )
}

export default App
