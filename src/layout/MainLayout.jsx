import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="bg-slate-50">
          <div className="py-32 container mx-auto">
            <AboutMe />
          </div>
        </div>

        <div className="container mx-auto py-5">
          <Projects />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
