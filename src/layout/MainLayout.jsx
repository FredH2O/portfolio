import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="bg-slate-50 dark:bg-zinc-900 dark:text-white duration-200">
          <div className="py-32 container mx-auto">
            <AboutMe />
          </div>
        </div>
        <div className="dark:bg-zinc-800 dark:text-white duration-200">
          <div className="container mx-auto py-5">
            <Projects />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
