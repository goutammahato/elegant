import { useState } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const user = useSelector((state) => state.userState.user);
  const { cartTotal} = useSelector((state) => state.cartState);
     console.log(user.role);
     
  const [shippingCost, setShippingCost] = useState(0.0);

  const shippingOptions = [
    { id: "free", label: "Free shipping", cost: 0.0 },
    { id: "express", label: "Express shipping", cost: 15.0 },
    { id: "pickup", label: "Pick Up", cost: 21.0 },
  ];

  const orderTotal = cartTotal + shippingCost;

  const handleShippingChange = (cost) => {
    setShippingCost(cost);
  };
  return (
    <div className="border rounded-lg p-4 max-w-sm mx-auto">
      <h2 className="font-semibold text-lg mb-4">Cart summary</h2>

      {/* Shipping Options */}
      <div className="space-y-2 mb-4">
        {shippingOptions.map((option) => (
          <label
            key={option.id}
            className={`flex justify-between items-center border rounded-lg p-2 cursor-pointer ${shippingCost === option.cost &&"border-black bg-gray-100 text-black font-semibold"}`}
          >
            <div className="flex items-center  gap-2">
              <input
                type="radio"
                name="shipping"
                value={option.id}
                checked={shippingCost === option.cost}
                onChange={() => handleShippingChange(option.cost)}
                className="accent-black"
              />
              <span>{option.label}</span>
            </div>
            <span>{formatPrice(option.cost)}</span>
          </label>
        ))}
      </div>

      {/* Subtotal */}
      <div className="flex justify-between text-sm border-t border-gray-300 pt-2">
        <span>Subtotal</span>
        <span className="font-medium">{formatPrice(cartTotal)}</span>
      </div>

      {/* Total */}
      <div className="flex justify-between text-lg font-bold mt-2">
        <span>Total</span>
        <span>{formatPrice(orderTotal)}</span>
      </div>

      {/* Checkout Button */}
      {user ? (
        <Link to="/checkout" className="bg-black btn text-white w-full py-2 mt-4 rounded-md font-semibold hover:bg-gray-800 transition">
          proceed to checkout
        </Link>
      ) : (
        <Link to="/login" className="btn btn-primary btn-block mt-8 ">
          please login
        </Link>
      )}
    </div>
  );
};

export default CartTotals;
