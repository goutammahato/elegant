import Filters from "./Filters";
import ProductsGrid from "./ProductsGrid";

import ShopPage from "./ShopBanner";

const ProductsContainer = () => {
  return (
    <>
      <ShopPage />
      <Filters />
      {/* PRODUCTS */}
      <div>
        <ProductsGrid />
      </div>
    </>
  );
};

export default ProductsContainer;
