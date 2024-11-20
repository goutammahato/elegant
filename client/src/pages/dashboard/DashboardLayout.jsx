import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import DashNav from "../../components/dashboard/DashNav";
import LeftSidebar from "../../components/dashboard/LeftSidebar";

const DashboardLayout = () => {
  const user = useSelector((state) => state.userState.user);

  if (!user) return <Navigate to="/" />;

  if (user && user.role === "user") {
    return <Navigate to="/" />;
  }

  return (
    <div >
      <DashNav />
      <div className="flex h-full">
        <LeftSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
