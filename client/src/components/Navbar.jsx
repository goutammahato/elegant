import { FaBarsStaggered } from "react-icons/fa6";

import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";

import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const Navbar = () => {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  return (
    <nav className="bg-white mx-auto max-w-6xl px-8">
      <div className="navbar align-element ">
        <div className="navbar-start">
          <NavLink to="/" className="hidden lg:flex  text-3xl">
            3legant
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-x-4 menu-horizontal bg-base-100">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <FiSearch className="h-6 w-6" />
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ">
            <div className="indicator">
              <BsHandbag className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="">
              <CgProfile className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-40"
            >
              <li>
                <a >hello,{user?user.name:"user"}</a>
              </li>
              <li onClick={handleLogout}>
                <Link to="/login">{user?"logout":"login"}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
