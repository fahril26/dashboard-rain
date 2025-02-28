import Cookies from "js-cookie";

const Topbar = () => {
  const username = Cookies.get("username");

  return (
    <div className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="text-gray-800">
        Welcome, <span className="font-bold">{username}</span>
      </div>
      <div className="flex space-x-4">
        <button className="text-blue-600 hover:underline">Notification</button>
        <button className="text-blue-600 hover:underline">Profile</button>

        <button className="lg:hidden text-gray-800" id="hamburger-btn">
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
        </button>
      </div>
    </div>
  );
};

export default Topbar;
