import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../molecules";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar position={"left-0"} />

      <main className=" w-full h-screen overflow-y-auto bg-gray-100">
        <Topbar />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
