import { useSelector } from "react-redux";
import Card from "./Card";

const ProductsCard = () => {
  const { products, error, loading } = useSelector((state) => state.products);
  const {cartCount} = useSelector((state) => state.addToCart)
  const cartQuantityMap = Object.fromEntries(cartCount.map((item) => [item.id, item.quantity]))


  if (loading) {
    return <h1>Loading Products.....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} product={product} quantity={cartQuantityMap[product.id] ?? 0}/>
        ))}
      </div>
    </>
  );
};

export default ProductsCard;
