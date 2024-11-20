import React, { useState } from "react";
import { formatPrice, generateAmountOptions } from "../utils";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const { cartID, name, price, image, amount, productColor } = cartItem;
  const [count, setCount] = useState(amount);

  const increment = () => {
    setCount(count + 1);
    dispatch(editItem({ cartID, amount: count+1 }));
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
    dispatch(editItem({ cartID, amount: count-1 }));
  };
  
  
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 "
    >
      <img
        src={image}
        alt={name}
        className="h-20 w-20 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/*INFO*/}
      <div className="sm:ml-6 sm:w-48">
        {/*TITLE*/}
        <h3 className="capitalize font-medium">{name}</h3>

        {/*COLOR*/}

        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :
          <span
            className="badge badge-sm "
            style={{ backgroundColor: productColor }}
          ></span>{" "}
          {productColor}
        </p>
        <button
          className="mt-2 text-gray-600 font-semibold  text-sm"
          onClick={removeItemFromCart}
        >
          X remove
        </button>
      </div>
      {/* AMOUNT */}
      <div className="sm:ml-10">
        {/*AMOUNT*/}
        <div className="flex items-center justify-between w-20 p-1 px-2 border border-black rounded-lg ">
          <button
            onClick={decrement}
            className="text-lg font-bold text-gray-700 hover:text-black"
          >
            -
          </button>
          <span className="text-lg font-semibold">{amount}</span>
          <button
            onClick={increment}
            className="text-lg font-bold text-gray-700 hover:text-black"
          >
            +
          </button>
        </div>
        {/*REMOVE*/}
      </div>
      {/*PRICE*/}
      <p className="font-medium sm:ml-auto">
        {formatPrice(parseInt(price ))}
      </p>
      <p className="font-medium sm:ml-auto">
        {formatPrice(parseInt(price * amount))}
      </p>
    </article>
  );
};

export default CartItem;
