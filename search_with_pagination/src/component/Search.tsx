import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const [currPage, setCurrPage] = useState(1);
  const debouncedValue = useDebounce(searchInput,500);
  const URL = debouncedValue.trim() ? `https://dummyjson.com/products/search?q=${encodeURIComponent(debouncedValue.trim())}&limit=10&skip=${(currPage - 1) * 10}` :`https://dummyjson.com/products?limit=10&skip=${(currPage - 1) * 10}`;
  const { isLoading, productData, error } = useFetch(URL);
  const totalPages = productData ? Math.ceil(productData?.total / 10) : 0;


  if (error) {
    return <h3>Please refresh the page</h3>;
  }
  const handleSearch = (value: string) => {
    setSearchInput(value);
    setCurrPage(1)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search product..."
        value={searchInput}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div>
        <div>
          <ul>
            {isLoading ? "Loading Products" : productData?.products.map((prod) => (
              <li key={prod.id}>
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                  style={{ width: "200px", height: "200px" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <button onClick={() => setCurrPage((prev) => prev - 1)} disabled={currPage === 1}>Prev</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrPage(index + 1)}
            disabled={currPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => setCurrPage((prev) => prev + 1)} disabled={currPage === totalPages}>Next</button>
      </div>
    </div>
  );
};
