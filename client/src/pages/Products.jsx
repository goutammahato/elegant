import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";


export const loader = async () => {
  const response = await customFetch("product/product-list/");
  const products = response.data.products;
  console.log(products);

  return { products };
};

const Products = () => {
  return (
    <>
      <ProductsContainer />
    </>
  );
};

export default Products;
