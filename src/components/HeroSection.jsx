import SideBarSocials from "./SideBarSocials";
import me from "/images/me.png";
import { Theme } from "../context/Theme";
import { useContext } from "react";
import Squares from "./Squares";

const HeroSection = ({ id }) => {
  const { theme } = useContext(Theme);

  return (
    <section id={id} className="relative h-screen flex justify-center">
      <div className="absolute inset-0 dark:bg-black bg-slate-700 opacity-80"></div>

      <Squares
        speed={0.1}
        squareSize={30}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor={theme === "dark" ? "#475569" : "grey"}
        hoverFillColor="#F43F5E"
      />

      <SideBarSocials />
      {/* hero content */}
      <div className="relative gap-7 z-20 flex flex-col xl:flex-row container justify-center items-center m-auto w-auto xl:text-left text-center text-white px-4">
        <div className="w-52 h-52 rounded-full overflow-hidden border-2 border-white shadow-lg">
          <img className="w-full h-full object-cover" src={me} alt="Fred" />
        </div>

        <div className="flex flex-col space-y-5 items-center xl:items-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
            Hey, I'm Fred.
          </h1>
          <p className=" text-lg md:text-2xl lg:max-w-4xl">
            Junior Front-End Developer with a passion for learning, discovering
            new tech, and creating cool web projects.
          </p>
          <button
            aria-label="View Projects"
            className="uppercase hover:-translate-y-0.5 duration-300 ease-in-out tracking-wider rounded text-lg w-36 p-2 font-bold mt-4 bg-rose-500"
          >
            Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
