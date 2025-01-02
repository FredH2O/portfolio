import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex z-20 justify-between text-gray-600 items-center px-4 py-2 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <h2 className="text-xl font-extrabold uppercase">Fred//dev</h2>
      </div>

      {/* Mobile Menu Icon */}
      <div className="burger md:hidden" onClick={toggleMenu}>
        <input type="checkbox" checked={menuOpen} readOnly />
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul
        className={`fixed top-0 left-0 rounded h-1/3 p-3 bg-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-40"
        } transition-transform duration-500 md:static md:transform-none md:flex md:gap-4 md:items-center md:font-bold md:space-x-5`}
      >
        <li className="border-b md:border-none p-4 md:p-0">
          <a href="" className="hover:text-rose-500">
            HOME
          </a>
        </li>
        <li className="border-b md:border-none p-4 md:p-0">
          <a href="" className="hover:text-rose-500">
            ABOUT
          </a>
        </li>
        <li className="border-b md:border-none p-4 md:p-0">
          <a href="" className="hover:text-rose-500">
            PROJECTS
          </a>
        </li>
        <li className="p-4 md:p-0">
          <a href="" className="hover:text-rose-500">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
