import { useLocation } from "react-router-dom";
import { navLink } from "../../pattern";
import Navlink from "./Navlink";

const Sidebar = ({ className }) => {
  const currentPath = useLocation().pathname;

  return (
    <div
      className={`w-72 bg-blue-800 text-white h-screen p-4 hidden lg:block ${className}`}
    >
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <Navlink links={navLink} currentPath={currentPath} />
    </div>
  );
};

export default Sidebar;
