import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../molecules";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className=" w-full h-screen overflow-y-auto">
        <Topbar />
        {<Outlet />}
      </main>

      <div
        id="mobile-sidebar"
        className=" fixed inset-0 bg-blue-600 text-white p-4 transform -translate-x-full transition-transform duration-300"
      >
        <ul>
          <li className="mb-4">
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Beranda
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Laporan
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Pengaturan
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Profil
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-blue-700 p-2 rounded">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
