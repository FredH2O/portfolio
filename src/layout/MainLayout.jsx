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
        <div className="bg-slate-50">
          <div className="py-32 container mx-auto">
            <AboutMe />
          </div>
        </div>

        <div className="container mx-auto py-5">
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
