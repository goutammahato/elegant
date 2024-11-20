import { useLoaderData } from "react-router-dom";

import FeatureCard from "./FeatureCard";

const FeatureGrid = () => {
  const { products } = useLoaderData();

  console.log(products);

  return (
    <div className="carousel carousel-center  rounded-box w-full space-x-4 p-4">
      {products.slice(-8).map((product) => (<FeatureCard key={product.id} product={product}/>))}
    </div>
  );
};

export default FeatureGrid;
