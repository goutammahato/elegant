import  { useState } from "react";
import money from "../assets/money.png"

const CouponInput = () => {
  const [coupon, setCoupon] = useState("");

  const handleApplyCoupon = () => {
    // Add coupon handling logic here
    console.log("Applying coupon:", coupon);
  };

  return (
    <div className="mx-auto max-w-6xl px-8 pt-5 pb-16">
    <div className="max-w-md   px-8  p-4">
      <h2 className="font-semibold text-lg">Have a coupon?</h2>
      <p className="text-gray-500 mb-2">Add your code for an instant cart discount</p>
      <div className="flex items-center border rounded-lg overflow-hidden">
        <span className="px-3 text-gray-500">
          {/* Icon (can be replaced with an SVG or another icon component) */}
          <img src={money} alt="coupon"/>
        </span>
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="flex-grow p-3 text-gray-600 focus:outline-none"
        />
        <button
          onClick={handleApplyCoupon}
          className=" text-black px-4 py-2 font-semibold  transition-colors"
        >
          Apply
        </button>
      </div>
    </div>
    </div>
  );
};

export default CouponInput;
