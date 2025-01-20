import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import HeroSection from "../components/HeroSection";
import Contact from "../components/Contact";
import OtherProjectsButton from "../components/OtherProjectsButton";

const HomePage = () => {
  return (
    <>
      <HeroSection id="home" />
      <div className="bg-slate-50 dark:bg-zinc-900 dark:text-white duration-200">
        <div className="py-32 container mx-auto" id="about">
          <AboutMe />
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-800 dark:text-white duration-200">
        <div className="container mx-auto py-5" id="projects">
          <Projects />
        </div>
        <OtherProjectsButton />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
