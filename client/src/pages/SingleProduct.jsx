import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import SectionTitle from "../components/SectionTitle";
import { useState } from "react";
import { addItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { CiHeart } from "react-icons/ci";

export const loader = async ({ params }) => {
  const response = await customFetch(`/product/single-product/${params.id}`);

  return { product: response.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { images, name, price, description, color } = product;
  const rupeesAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(color[0]);
  const [amount, setAmount] = useState(1);

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
    setAmount(count+1);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
    setAmount(count-1);
  };
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image: images[0],
    name,
    productColor,
    amount,
    price,
  };
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  const dispatch = useDispatch();
  return (
    <>
      <section className="mx-auto max-w-6xl px-8 ">
        <div className="text-md breadcrumbs ">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        {/* PRODUCT */}
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 mb-24">
          <img
            src={images[0]}
            alt={name}
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />
          <div>
            <h1 className="capitalize text-3xl font-bold">{name}</h1>

            <p className="mt-6 leading-8 ">{description}</p>
            <p className="mt-3 text-xl">{rupeesAmount}</p>
            {/* Colors */}
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">
                colors
              </h4>
              <div className="mt-2">
                {color.map((color) => {
                  return (
                    <button
                      key={color}
                      type="button"
                      className={`badge w-6 h-6 mr-2 ${
                        color === productColor && "border-2 border-secondary"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setProductColor(color)}
                    ></button>
                  );
                })}
              </div>
            </div>
            {/* AMOUNT */}
            <div className="flex gap-2 mt-4 ">
              <div className="flex items-center justify-between w-32 p-2 bg-gray-100 rounded-lg ">
                <button
                  onClick={decrement}
                  className="text-2xl font-bold text-gray-700 hover:text-black"
                >
                  -
                </button>
                <span className="text-2xl font-semibold">{count}</span>
                <button
                  onClick={increment}
                  className="text-2xl font-bold text-gray-700 hover:text-black"
                >
                  +
                </button>
              </div>
              <div>
                <button className=" border-2 flex justify-center items-center gap-1 border-black btn-md w-60 rounded-md text-lg font-semibold">
                  <CiHeart size={20} /> Wishlist
                </button>
              </div>
            </div>

            {/* CART BTN */}
            <div className="mt-10">
              <button
                className="rounded-md text-white font-bold  bg-slate-800 btn-md w-96"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SingleProduct;
