import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

const DashNav = () => {
    const user = useSelector((state) => state.userState.user);
  return (
    <div className="flex items-center justify-between bg-white p-4 ">
      {/* Logo */}
      <div className="text-xl font-semibold text-gray-800">3legant</div>

      {/* Search Input */}
      <div className="flex-grow mx-4 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <CiSearch size={20} />
          </span>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-3">
      <img
          src="http://surl.li/povvkc" // Replace with actual profile image URL
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <div className="text-right">
          <p className="text-sm font-medium text-gray-800">{user?user.name:"Admin"}</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
        
      </div>
    </div>
  );
};

export default DashNav;
