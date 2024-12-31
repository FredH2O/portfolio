import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutMe />
      </main>
    </>
  );
};

export default MainLayout;
