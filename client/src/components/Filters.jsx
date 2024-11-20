import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { BsFillGridFill, BsGrid3X3GapFill } from "react-icons/bs";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";

const Filters = () => {
  const [category, setCategory] = useState("Living Room");
  const [price, setPrice] = useState("All Price");
  const [view, setView] = useState("grid");
  return (
    <div className=" mx-auto max-w-6xl px-8 flex items-center justify-between p-4">
      {/* Filter Dropdowns */}
      <div className="flex space-x-4">
        <div>
          <label className="block text-gray-500 px-2 py-1 font-semibold">
            Categories
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 border-gray-800 rounded-lg px-4 py-2"
          >
            <option>Living Room</option>
            <option>Bedroom</option>
            <option>Kitchen</option>
            <option>Bathroom</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-500 px-2 py-1 font-semibold">Price</label>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-gray-800 rounded-lg px-4 py-2"
          >
            <option>All Price</option>
            <option>Under $50</option>
            <option>$50 - $100</option>
            <option>$100 - $200</option>
          </select>
        </div>
      </div>

      {/* Sort and View Options */}
      <div className="flex items-center space-x-4 py-1">
        <div className="relative">
          <button className="flex items-center space-x-2">
            <span>Sort by</span>
            <IoIosArrowDown/>
          </button>
          {/* Dropdown content can go here if needed */}
        </div>

        {/* View Options */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 border rounded ${
              view === "grid" ? "bg-gray-300" : ""
            }`}
          >
            <BsGrid3X3GapFill />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 border rounded ${
              view === "list" ? "bg-gray-300" : ""
            }`}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setView("2V")}
            className={`p-2 border rounded ${
              view === "2V" ? "bg-gray-300" : ""
            }`}
          >
            <CiGrid2V />
          </button>
          <button
            onClick={() => setView("2H")}
            className={`p-2 border rounded ${
              view === "2H" ? "bg-gray-300" : ""
            }`}
          >
            <CiGrid2H />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
