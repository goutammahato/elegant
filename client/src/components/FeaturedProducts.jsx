

import { Link } from "react-router-dom";
import FeatureGrid from "./FeatureGrid";


const FeaturedProducts = () => {
  return (
    <div className="pt-5 mx-auto max-w-6xl px-8">
       <div className="flex justify-between items-center p-4">
      <h2 className="text-3xl text-slate-900 font-semibold">New <br/> Arrivals</h2>
      <Link to="/products" className="flex items-center text-gray-600 hover:text-black">
        More Products <span className="ml-2">&rarr;</span>
      </Link>
    </div>
      <FeatureGrid />
    </div>
  );
};

export default FeaturedProducts;
