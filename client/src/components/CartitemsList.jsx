import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartitemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  return (
    <>
      <div className="flex justify-between px-4 py-2 border-b-2 border-black mb-2">
        <div className="font-bold text-lg">Product</div>
        <div className="font-bold text-lg ml-[17rem]">Quantity</div>
        <div className="font-bold text-lg ml-5">Price</div>
        <div className="font-bold text-lg">Subtotal</div>
      </div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartId} cartItem={item} />;
      })}
    </>
  );
};

export default CartitemsList;
