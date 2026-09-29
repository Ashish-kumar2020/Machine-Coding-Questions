import { useState } from "react";

import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;

  const url = `https://dummyjson.com/products?limit=${limit}&skip=${offset}`;
  const { isLoading, data, error } = useFetch(url);
  const totalPages = Math.ceil(data.total / limit);
  console.log(totalPages);
  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  const handlePrevPage = () => {
    if(page > 1){
      setPage((prev) => prev - 1)
    }
  }

  const handleNextPage = () => {
    if(page < totalPages){
      setPage((prev) => prev + 1);
    }
  }

  return (
    <>
      <h3>Pagination</h3>

      {data?.products?.map((product) => {
        return (
          <div key={product.id}>
            <span>{product.title}</span>
          </div>
        );
      })}

      {/* Pages */}
      <div>
        <button type="button" disabled={page === 1} onClick={handlePrevPage}>Prev</button>
        <button type="button">{page}</button>
        <button type="button" disabled={page === totalPages} onClick={handleNextPage}>Next</button>
      </div>
    </>
  );
}

export default App;
