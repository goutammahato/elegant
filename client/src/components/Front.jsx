import living from "../assets/living.svg";
import bedroom from "../assets/bedroom.jpg";
import kitchen from "../assets/kitchen.jpg";

const Front = () => {
  return (
    <div className=" mx-auto max-w-6xl px-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-8 h-screen">
      {/* Living Room (Full height on the left) */}
      <div className=" relative bg-gray-100 h-[35rem] rounded-lg flex flex-col object-cover overflow-hidden items-start justify-center">
        <img
          src={living}
          alt="Living Room"
          className="w-full object-cover rounded-lg mb-4"
        />
        <div className="absolute top-4 left-3  ">
          <h2 className="text-2xl font-semibold  ">Living Room</h2>
          <a
            href="/products"
            className="text-blue-500 hover:underline flex items-center"
          >
            Shop Now <span className="ml-1">→</span>
          </a>
        </div>
      </div>

      {/* Right Side - Split into Bedroom and Kitchen */}
      <div className="flex flex-col gap-6 h-[35rem]">
        {/* Bedroom */}
        <div className=" relative bg-gray-100 p-6 rounded-lg overflow-hidden  h-full">
          <img
            src={bedroom}
            alt="Bedroom"
            className="w-full rounded-lg mb-4 object-top"
          />
          <div className="absolute left-3 bottom-4"><h2 className="text-2xl font-semibold mb-2">Bedroom</h2>
          <a
            href="/products"
            className="text-blue-500 hover:underline flex items-center"
          >
            Shop Now <span className="ml-1">→</span>
          </a></div>
          
        </div>

        {/* Kitchen */}
        <div className="relative bg-gray-100 p-6 rounded-lg overflow-hidden h-full">
          <img
            src={kitchen}
            alt="Kitchen"
            className="w-full rounded-lg mb-4"
          />
          <div className="absolute left-3 bottom-4">
          <h2 className="text-2xl font-semibold mb-2">Kitchen</h2>
          <a
            href="/products"
            className="text-blue-500 hover:underline flex items-center"
          >
            Shop Now <span className="ml-1">→</span>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
