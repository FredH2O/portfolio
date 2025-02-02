import SpotlightCard from "../components/SpotlightCard";
import OtherProjectsData from "../data/OtherProjects.js";
import { usePage } from "../context/PageContext.jsx";
import BorderStyling from "../components/BorderStyling.jsx";
import usePageUpdate from "../hooks/usePageUpdate.js";

const OtherProjectsPage = () => {
  const { page } = usePage();

  usePageUpdate();

  return (
    <section className="py-32 dark:bg-zinc-900 bg-slate-100">
      <div className="text-slate-700 dark:text-slate-100 text-center flex flex-col justify-center items-center py-12">
        <h2 className="text-4xl uppercase font-bold ">Projects</h2>
        <p className="p-5">
          Here are some of my other projects. Please note that some may have
          bugs, and I'm still learning and improving!
        </p>
        <BorderStyling />
      </div>

      <div className="container m-auto grid place-items-center xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 p-3 gap-5">
        {page &&
          OtherProjectsData.map((project, index) => (
            <SpotlightCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
      </div>
    </section>
  );
};

export default OtherProjectsPage;
