import { useEffect, useState } from "react";

type Product = {
  id: number;

  title: string;

  thumbnail: string;
};
const Scrolling = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10}`,
      );
      if (!response.ok) {
        throw new Error("Failed");
      }
      const data = await response.json();
      setProducts((prev) => [...prev, ...data.products]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    function myThrottle(cb, d) {
      let executionTime = 0;
      return function (...args) {
        const currentTime = Date.now();
        if (currentTime - executionTime > d) {
          executionTime = currentTime;
          console.log("sdj");
          cb(args);
        }
      };
    }
    function handleScroll() {
      if (
        window.scrollY + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        fetchProducts();
      }
    }

    const throttleScroll = myThrottle(handleScroll, 500);

    window.addEventListener("scroll", throttleScroll);

    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, [page]);

  return (
    <div>
      {products.map((val) => (
        <div key={val.title} style={{ height: 300 }}>
          <img src={val.thumbnail} alt={val.title} />
        </div>
      ))}

      {isLoading && <div>Loading....</div>}
    </div>
  );
};

export default Scrolling;
