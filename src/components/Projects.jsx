import BorderStyling from "./BorderStyling";
import projects from "../data/Projects";

const Projects = () => {
  return (
    <section>
      <div className="text-center my-32 space-y-3 flex flex-col items-center">
        <h2 className="uppercase font-bold text-4xl">Projects</h2>
        <p className="text-gray-600">
          Here is some of my projects that you can check out!
        </p>
        <BorderStyling />
      </div>
      {projects.map((proj, index) => (
        <div key={index} className="grid grid-cols-2">
          <img className="w-32 h-32" src={proj.image} alt={proj.title} />
          <div>
            <h3 className="text-3xl font-semibold">{projects.title}</h3>
            <p>{proj.description}</p>
            <button className="rounded p-2 hover:bg-rose-600 bg-rose-500">
              Check it out!
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
