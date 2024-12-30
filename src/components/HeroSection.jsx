import wallpaper from "/images/hero-wallpaper2.jpg";
import me from "/images/me.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex justify-center">
      {/* background and overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={wallpaper}
          alt="Hero Wallpaper"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* hero content */}
      <div className="relative gap-7 z-0 flex flex-col xl:flex-row items-center justify-center h-full xl:text-left text-center text-white px-4">
        <div className="w-52 h-52 rounded-full overflow-hidden border-2 border-white shadow-lg">
          <img className="w-full h-full object-cover" src={me} alt="Fred" />
        </div>
        <div className="flex flex-col space-y-5 items-center xl:items-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
            Hey, I'm Fred
          </h1>
          <p className=" text-lg md:text-2xl lg:max-w-4xl">
            Junior Front-End Developer with a passion for learning, discovering
            new tech, and creating cool web projects.
          </p>
          <button className="uppercase border-2 hover:-translate-y-0.5 duration-300 ease-in-out rounded-lg text-lg w-36 p-2 font-bold mt-4 bg-rose-500">
            Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
