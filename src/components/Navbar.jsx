import { useState } from "react";
import DarkAndLightButton from "./DarkAndLightButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex z-20 justify-between text-gray-600 items-center xl:p-2 xl:px-4 lg:p-1 lg:px-3 p-5 bg-white shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center">
        <h2 className="text-xl font-extrabold uppercase">Fred//dev</h2>
      </div>

      {/* Mobile Menu Icon */}
      <div className="burger lg:hidden" onClick={toggleMenu}>
        <input type="checkbox" checked={menuOpen} readOnly />
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul
        className={`fixed top-0 left-0 rounded h-full p-3 bg-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-40"
        } transition-transform duration-200 lg:static lg:transform-none lg:flex lg:gap-4 lg:items-center lg:font-bold lg:space-x-5`}
      >
        <li className="border-b lg:border-none p-4 lg:p-0">
          <a href="" className="hover:text-rose-500">
            HOME
          </a>
        </li>
        <li className="border-b lg:border-none p-4 lg:p-0">
          <a href="" className="hover:text-rose-500">
            ABOUT
          </a>
        </li>
        <li className="border-b lg:border-none p-4 lg:p-0">
          <a href="" className="hover:text-rose-500">
            PROJECTS
          </a>
        </li>
        <li className="p-4 lg:p-0">
          <a href="" className="hover:text-rose-500">
            CONTACT
          </a>
        </li>
        <DarkAndLightButton />
      </ul>
    </nav>
  );
};

export default Navbar;
