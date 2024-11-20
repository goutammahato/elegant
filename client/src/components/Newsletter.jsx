import { MdOutlineEmail } from "react-icons/md";
import table from "../assets/table2.png";
import chair from "../assets/chair2.png";

const Newsletter = () => {
  return (
    <div className="flex relative items-center justify-center overflow-hidden bg-[#F2F4F6] p-8">
      <img src={table} alt="table" className=" absolute -left-72 object-cover" />

      <div className=" p-8  max-w-md">
        <h2 className="text-2xl text-center text-slate-900 font-semibold mb-2">
          Join Our Newsletter
        </h2>
        <p className="text-gray-800 mb-4">
          Sign up for deals, new products and promotions
        </p>
        <div className="flex items-center border-b-2  border-gray-300  overflow-hidden">
          <span className="flex justify-center items-center">
            <MdOutlineEmail size={20} />
          </span>
          <input
            type="email"
            placeholder={"Email address"}
            className="flex-grow p-2 bg-transparent outline-none"
          />
          <button className="  text-[#6C727580] px-4 py-2">Signup</button>
        </div>
      </div>
      <img src={chair} alt="table" className=" absolute -right-72 object-cover" />
    </div>
  );
};

export default Newsletter;
