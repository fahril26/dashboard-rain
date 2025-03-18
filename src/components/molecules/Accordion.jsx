import { useState } from "react";
import Navlink from "./Navlink";
import { Button } from "../atom";

const Accordion = ({ submenus, config, currentPath, handleCloseSidebar }) => {
  const initialStatus = submenus.some((link) => link.path === currentPath);
  const [active, setActive] = useState(initialStatus);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <li>
      <div
        onClick={handleToggle}
        className="w-full hover:bg-blue-700 cursor-pointer text-white flex justify-between items-center p-2 rounded-md"
      >
        <div className="flex gap-2 items-center">
          {config.icon && <config.icon />}
          {config.text}
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
      </div>

      <Navlink
        links={submenus}
        handleCloseSidebar={handleCloseSidebar}
        currentPath={currentPath}
        className={`pl-4 space-y-2 mt-2 transition-all duration-300 ease-in-out  ${
          active
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "opacity-0 -translate-y-2.5 pointer-events-none"
        }`}
      />
    </li>
  );
};

export default Accordion;
