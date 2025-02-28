import { Link } from "react-router-dom";
import { navLink } from "../../pattern";
import { Accordion } from ".";

const Sidebar = () => {
  return (
    <div className="w-72 bg-blue-800 text-white h-screen p-4 hidden lg:block">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul>
        {navLink.map((link, index) => {
          return !link.submenus ? (
            <li className="mb-4" key={index}>
              <Link
                to={link.path}
                className="block w-full hover:bg-blue-700 p-2 rounded"
              >
                <div className="flex gap-1.5 items-center">
                  <link.icon className="text-xl" />
                  {link.text}
                </div>
              </Link>
            </li>
          ) : (
            <Accordion key={index} config={link} submenus={link.submenus} />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
