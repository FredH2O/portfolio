import BorderStyling from "./BorderStyling";
import projects from "../data/Projects";
import UiverseButton from "./Buttons/UIVerseButton";

const Projects = () => {
  return (
    <section>
      <div className="text-center mt-24 space-y-3 flex flex-col items-center">
        <h2 className="uppercase font-bold text-slate-700 dark:text-slate-200 text-4xl">
          Projects
        </h2>
        <p className="w-2/3 text-slate-500 dark:text-slate-300">
          Welcome to my project showcase! As a new frontend developer, I'm
          excited to share the work I've been doing. Check out my projects to
          see how I'm learning and growing in the field!
        </p>
        <BorderStyling />
      </div>
      {projects.map((proj, index) => (
        <div
          key={index}
          className="container grid lg:grid-cols-2 grid-cols-1 py-10 place-items-center"
        >
          <img className="w-3/4" src={proj.image} alt={proj.title} />
          <div className="h-full flex flex-col space-y-7 lg:items-start justify-center items-center text-slate-700 dark:text-slate-200 gap-2 p-2">
            <h3 className="text-3xl font-semibold">{proj.title}</h3>
            <p className="w-2/3">{proj.description}</p>
            <div className="w-full flex lg:justify-end justify-center lg:px-24">
              <div>
                <a rel="noopener noreferrer" href={proj.link} target="_blank">
                  <UiverseButton name={"Check it out!"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
