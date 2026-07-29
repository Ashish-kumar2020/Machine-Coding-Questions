import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, updateCartData } from "../feature/addToCardSlice";

const Card = ({ product ,quantity}) => {
  const [isCartButton, setIsCartButton] = useState(true);
  const dispatch = useDispatch();
  const {cartCount} = useSelector((state) => state.addToCart )

  const handleAddToCart = (value) => {
    setIsCartButton(false);
    dispatch(updateCartData(value))
  };

  const handleDecrementCartValue = (id) => {
    console.log(id);
    dispatch(decrement(id))
  }

  const handleIncrementCartValue = (id) => {
    console.log(id);
    dispatch(increment(id))
  }


  return (
    <div className="w-72 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="h-56 bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">⭐</span>
          <span className="text-sm font-medium">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">₹{product.price}</p>

            <p className="text-sm text-green-600">
              {product.discountPercentage}% OFF
            </p>
          </div>

          {isCartButton ? (
            <button
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          ) : (
            <div className="inline-flex items-center overflow-hidden rounded-lg border border-gray-300 shadow-sm">
              <button className="flex h-10 w-10 items-center justify-center bg-gray-100 text-xl font-semibold transition-colors hover:bg-gray-200" onClick={() => handleDecrementCartValue(product.id)}>
                −
              </button>

              <span className="flex h-10 min-w-12 items-center justify-center border-x border-gray-300 px-4 text-base font-medium">
                {quantity}
              </span>

              <button className="flex h-10 w-10 items-center justify-center bg-indigo-600 text-xl font-semibold text-white transition-colors hover:bg-indigo-700" onClick={() => handleIncrementCartValue(product.id)} >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
