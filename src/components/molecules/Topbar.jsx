import Cookies from "js-cookie";
import { Button } from "../atom";
import { Link } from "react-router-dom";
import { logoutService } from "../../service";

const Topbar = ({ handleShowSidebar }) => {
  const username = Cookies.get("username");

  return (
    <div className="bg-white fixed md:static top-0 left-0 right-0 p-4 shadow-md flex justify-between items-center">
      <div className="text-gray-800">
        Welcome, <span className="font-bold">{username}</span>
      </div>
      <div className="flex space-x-4">
        <Link to="/login" className="hidden lg:block">
          <Button
            onClick={() => logoutService()}
            className="text-gray-800 hover:text-blue-500 "
          >
            Logout
          </Button>
        </Link>
        <Button
          className="lg:hidden text-gray-800"
          id="hamburger-btn"
          onClick={handleShowSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
