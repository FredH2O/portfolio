import { FaGithub, FaLinkedin } from "react-icons/fa";
const SideBarSocials = () => {
  return (
    <div className="absolute h-screen left-0 md:flex hidden flex-col justify-center">
      <div className="rounded bg-white border-2 flex items-center justify-center flex-col">
        <a
          href="https://github.com/FredH2O"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-black p-1 m-1 hover:bg-rose-100 rounded"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/fred-huertas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          className="text-blue-700 p-1 m-1 hover:bg-rose-100 rounded"
        >
          <FaLinkedin size={32} />
        </a>
      </div>
    </div>
  );
};

export default SideBarSocials;
