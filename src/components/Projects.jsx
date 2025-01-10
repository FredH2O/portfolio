import BorderStyling from "./BorderStyling";
import projects from "../data/Projects";

const Projects = () => {
  return (
    <section>
      <div className="text-center my-32 space-y-3 flex flex-col items-center">
        <h2 className="uppercase font-bold text-4xl">Projects</h2>
        <p className="w-2/3 text-gray-600 dark:text-white">
          Welcome to my project showcase! As a new frontend developer, I'm
          excited to share the work I've been doing. Check out my projects to
          see how I'm learning and growing in the field!
        </p>
        <BorderStyling />
      </div>
      {projects.map((proj, index) => (
        <div
          key={index}
          className="container grid lg:grid-cols-2 grid-cols-1 place-items-center items-center justify-center"
        >
          <img className="w-3/4" src={proj.image} alt={proj.title} />
          <div className="h-full flex flex-col space-y-7 justify-center items-center gap-2 p-2">
            <h3 className="text-3xl font-semibold">{proj.title}</h3>
            <p className="w-2/3">{proj.description}</p>
            <button className="rounded p-2 text-white hover:bg-rose-600 bg-rose-500 w-1/2">
              Check it out!
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
