

const CartProgress = () => {
  return (
    <div className="text-center  -mt-16">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      <div className="flex items-center justify-center space-x-12">
        {/* Step 1 - Active Step */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full">
            1
          </div>
          <span className="mt-2 text-black font-semibold">Shopping cart</span>
          <div className="w-full border-b-2 border-black mt-2"></div>
        </div>

        {/* Step 2 - Inactive Step */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-300 text-gray-600 rounded-full">
            2
          </div>
          <span className="mt-2 text-gray-500">Checkout details</span>
        </div>

        {/* Step 3 - Inactive Step */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-300 text-gray-600 rounded-full">
            3
          </div>
          <span className="mt-2 text-gray-500">Order complete</span>
        </div>
      </div>
    </div>
  );
};

export default CartProgress;
