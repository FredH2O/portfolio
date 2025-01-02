import BorderStyling from "./BorderStyling";

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
      <div className="grid grid-cols-2">
        <img className="w-32 h-32" src="" alt="" />
        <div>
          <h3 className="text-3xl font-semibold">Project 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            minima expedita tenetur reiciendis repellat commodi quibusdam, vero
            laboriosam. Voluptatum aspernatur quis ab officiis natus odio id
            eveniet nesciunt nihil exercitationem!
          </p>
          <button className="rounded p-2 hover:bg-rose-600 bg-rose-500">
            Check it out!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
