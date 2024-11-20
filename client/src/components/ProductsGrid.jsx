import { Link, useLoaderData } from "react-router-dom";

import FeatureCard from "./FeatureCard";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className=" mx-auto max-w-6xl px-8 pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <Link key={index} to={`/products/${product._id}`}>
          <FeatureCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsGrid;
