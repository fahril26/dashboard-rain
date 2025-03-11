import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const Navlink = ({ links, className, currentPath }) => {
  return (
    <ul className={className}>
      {links.map((link, index) =>
        link.submenus ? (
          <Accordion
            key={index}
            config={link}
            submenus={link.submenus}
            currentPath={currentPath}
          />
        ) : (
          <li key={index}>
            <Link
              to={link.path}
              className={`block w-full hover:bg-blue-700 p-2 rounded mb-2.5 ${
                currentPath === link.path ? "bg-blue-700" : ""
              }`}
            >
              <div className="flex gap-1.5 items-center">
                {link.icon && <link.icon className="text-xl" />}

                {link.text}
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Navlink;
