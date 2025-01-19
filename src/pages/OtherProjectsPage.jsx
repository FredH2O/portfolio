import SpotlightCard from "../components/SpotlightCard";
import OtherProjectsData from "../data/OtherProjects.js";

const OtherProjectsPage = () => {
  return (
    <section className="container m-auto grid grid-cols-4">
      {OtherProjectsData.map((project, index) => (
        <SpotlightCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
        />
      ))}
    </section>
  );
};

export default OtherProjectsPage;
