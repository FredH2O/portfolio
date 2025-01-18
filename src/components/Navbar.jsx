import { useState } from "react";
import DarkAndLightButton from "./Buttons/DarkAndLightButton";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex z-20 justify-between text-gray-600 items-center xl:p-2 xl:px-4 md:p-1 md:px-3 p-5 bg-white shadow-md">
      {/* Logo Section */}
      <div>
        <h2 className="text-xl font-extrabold uppercase">Fred//dev</h2>
      </div>

      {/* Mobile Menu Icon */}
      <div className="burger md:hidden" onClick={toggleMenu}>
        <input type="checkbox" checked={menuOpen} readOnly />
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black md:bg-opacity-0 bg-opacity-50 z-0"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Navigation Links */}
      <ul
        className={`fixed top-0 left-0 rounded md:w-full md:flex-row flex-col w-1/2 flex md:justify-end h-full m-auto p-3 z-10 bg-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-200 md:static md:transform-none md:flex md:gap-4 md:items-center md:font-bold md:space-x-5`}
      >
        <li className="border-b md:border-none p-4 md:p-0">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-rose-500 cursor-pointer"
            onClick={toggleMenu}
          >
            HOME
          </Link>
        </li>
        <li className="border-b md:border-none p-4 md:p-0">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-rose-500 cursor-pointer"
            onClick={toggleMenu}
          >
            ABOUT
          </Link>
        </li>
        <li className="border-b md:border-none p-4 md:p-0">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-rose-500 cursor-pointer"
            onClick={toggleMenu}
          >
            PROJECTS
          </Link>
        </li>
        <li className="border-b md:border-none p-4 md:p-0">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-rose-500 cursor-pointer"
            onClick={toggleMenu}
          >
            CONTACT
          </Link>
        </li>
        <li className="p-2 md:p-0">
          <DarkAndLightButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
