import SpotlightCard from "../components/SpotlightCard";
import OtherProjectsData from "../data/OtherProjects.js";

const OtherProjectsPage = () => {
  return (
    <section className="py-32 dark:bg-zinc-900">
      <div className="container m-auto grid grid-cols-3">
        {OtherProjectsData.map((project, index) => (
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
