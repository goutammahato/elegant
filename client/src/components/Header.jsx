import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };

  return (
    <header className=" bg-[#F3F5F7] py-2 text-slate-800">
      <div className="align-element flex justify-center items-center ">
        {user ? (
          <div className="flex gap-x-2 items-center">
            <p className="text-sm font-semibold sm:text-sm"> 30% off storewide - limited time!</p>
            <Link className=" border-b-2 font-semibold border-blue-400 pb-1 text-blue-500">shop now →</Link>
            
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in 
            </Link>
            
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
