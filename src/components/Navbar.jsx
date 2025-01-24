import { useState } from "react";
import DarkAndLightButton from "./Buttons/DarkAndLightButton";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { usePage } from "../context/PageContext";
import usePageUpdate from "../hooks/usePageUpdate";
import logo from "/images/fred-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { page, handlePage } = usePage();

  usePageUpdate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex z-20 justify-between text-zinc-600 items-center xl:p-2 xl:px-4 md:p-1 md:px-3 px-3 py-2 bg-slate-50">
      {/* Logo Section */}
      <div>
        {/* <h2 className="text-xl font-extrabold font-mono uppercase"></h2> */}
        <img className="md:w-20 w-14" src={logo} alt="Frederico's Logo" />
      </div>

      {/* Mobile Menu Icon */}
      <div className="burger lg:hidden" onClick={toggleMenu}>
        <input type="checkbox" checked={menuOpen} readOnly />
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black lg:bg-opacity-0 bg-opacity-50 z-0"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Navigation Links */}
      <ul
        className={`fixed top-0 left-0 rounded lg:w-full lg:flex-row lg:justify-end flex-col w-1/2 flex h-full m-auto p-3 z-10 bg-slate-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-96"
        } transition-transform duration-200 lg:static lg:transform-none lg:flex lg:gap-4 lg:items-center lg:font-bold lg:space-x-5`}
      >
        <li className="border-b lg:border-none p-4 lg:p-0">
          {page ? (
            <RouterLink
              className="hover:text-rose-500"
              onClick={handlePage}
              to="/"
            >
              HOME
            </RouterLink>
          ) : (
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-rose-500 cursor-pointer"
              onClick={toggleMenu}
            >
              HOME
            </Link>
          )}
        </li>
        {page ? null : (
          <>
            <li className="border-b lg:border-none p-4 lg:p-0">
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
            <li className="border-b lg:border-none p-4 lg:p-0">
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
            <li className="border-b lg:border-none p-4 lg:p-0">
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
            <li className="border-b lg:border-none p-4 lg:p-0">
              <a
                href="/cv/2025CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View CV"
                className="hover:text-rose-500 cursor-pointer"
                onClick={toggleMenu}
              >
                CV
              </a>
            </li>
          </>
        )}

        <li className="px-2 pt-4 lg:p-0">
          <DarkAndLightButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
