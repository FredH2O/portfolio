const Navbar = () => {
  return (
    <nav className="flex z-20 justify-between text-gray-600 items-center px-4 py-2 bg-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="" alt="Logo" className="h-8 w-8" />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-4 font-bold p-5 space-x-5">
        <li>
          <a href="" className="hover:text-rose-500">
            HOME
          </a>
        </li>
        <li>
          <a href="" className="hover:text-rose-500">
            ABOUT
          </a>
        </li>
        <li>
          <a href="" className="hover:text-rose-500">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="" className="hover:text-rose-500">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
