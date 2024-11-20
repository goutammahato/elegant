import whiteroom from "../assets/whiteroom.jpg";

const ShopPage = () => {
  return (
    <div className="relative bg-white mx-auto max-w-6xl px-8  h-96">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${whiteroom})`}}></div>
      <div className="relative z-10 bg-white bg-opacity-0 p-8 pt-20  text-center">
        <nav className="mb-4 text-gray-600 text-sm">
          <a href="/" className="hover:text-black">
            Home
          </a>{" "}
          <span className="mx-2">›</span> Shop
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Shop Page</h1>
        <p className="text-gray-700">
          Let's design the place you always imagined.
        </p>
      </div>
    </div>
  );
};

export default ShopPage;
