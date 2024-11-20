import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import CartitemsList from "../components/CartitemsList";
import CartTotals from "../components/CartTotals";
import { Link } from "react-router-dom";
import CartProgress from "../components/CartProgress";
import Footer from "../components/Footer";
import CouponInput from "../components/CouponInput";

const Cart = () => {
  
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <section className="mx-auto max-w-6xl px-8">
        <CartProgress />
        <div className=" mx-auto max-w-6xl px-8 mt-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CartitemsList />
          </div>
          <div className="lg:col-span-4">
            <CartTotals />
            
          </div>
        </div>
      </section>
      <CouponInput />
      <Footer />
    </>
  );
};

export default Cart;
