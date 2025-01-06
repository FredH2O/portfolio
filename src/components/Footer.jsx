import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="grid grid-cols-2 container m-auto">
        <div className="">
          <h2>Frederico Huertas</h2>
          <p>
            A Junior Frontend Developer dedicated to building responsive and
            user-friendly websites and web applications, combining creativity
            and technical skills to enhance the overall user experience
          </p>
        </div>
        <div>
          <h2>Socials</h2>
          <FaGithub width={32} />
          <FaLinkedin width={32} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
