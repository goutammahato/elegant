import Benefits from "../components/Benefits";
import Cta from "../components/Cta";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Front from "../components/Front";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import { customFetch } from "../utils";

const url = "/product/product-list/";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.products;

  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <Front />
      <FeaturedProducts />
      <Benefits />
      <Cta />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Landing;
