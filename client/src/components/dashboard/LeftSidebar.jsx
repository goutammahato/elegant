import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="w-64 h-[90vh] bg-gray-50 flex flex-col justify-between  p-4">
      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="block text-lg font-semibold text-gray-700"
        >
          Add
        </Link>
        <Link
          to="/dashboard/products"
          className="block text-lg font-semibold text-gray-700   rounded"
        >
          Products
        </Link>
      </nav>
      <div className=" space-y-4 mt-auto mb-12">
        
        <a href="#" className="block text-lg font-semibold text-gray-700">
          Logout
        </a>
      </div>
    </div>
  );
};

export default LeftSidebar;
