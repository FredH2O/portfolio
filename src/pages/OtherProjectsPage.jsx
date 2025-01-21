import SpotlightCard from "../components/SpotlightCard";
import OtherProjectsData from "../data/OtherProjects.js";
import { usePage } from "../context/PageContext.jsx";
import { useLocation } from "react-router-dom";

const OtherProjectsPage = () => {
  const { page, setPage } = usePage();
  const location = useLocation();

  if (location.pathname === "/Other-Projects") {
    setPage(true);
  } else {
    setPage(false);
  }

  return (
    <section className="py-32 dark:bg-zinc-900">
      <div className="container m-auto grid lg:grid-cols-4 gap-3 md:grid-cols-2">
        {page &&
          OtherProjectsData.map((project, index) => (
            <SpotlightCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
      </div>
    </section>
  );
};

export default OtherProjectsPage;
