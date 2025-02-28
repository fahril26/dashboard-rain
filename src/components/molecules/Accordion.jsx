import { useState } from "react";
import { Link } from "react-router-dom";

const Accordion = ({ submenus, config }) => {
  const [active, setActive] = useState(null);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <li>
      <button
        onClick={handleToggle}
        className="w-full hover:bg-blue-600 cursor-pointer text-white text-lg flex justify-between items-center p-2 rounded-md"
      >
        <div className="flex gap-2 items-center">
          <config.icon /> {config.text}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform ${
            active ? "" : "-rotate-90"
          } transition-translate duration-300 ease-in-out`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <ul
        className={`pl-4 space-y-2 mt-2 transition-all duration-300 ease-in-out  ${
          active ? "translate-y-0 opacity-100" : "-translate-y-2.5 opacity-0"
        }`}
      >
        {submenus?.map((submenu, idx) => (
          <li key={idx} className="w-full">
            <Link
              to={submenu.path}
              className="text-white block w-full hover:bg-blue-600 p-2 rounded-sm"
            >
              {submenu.text}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Accordion;
