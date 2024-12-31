const AboutMe = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg">
          Here, you can learn more about me, what I do, and my skills, with a
          focus on programming and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skills Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold">My Skills</h3>
          <ul className="flex flex-wrap gap-4">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "TailwindCSS",
              "Bootstrap",
              "GIT",
              "Github",
              "Responsive Design",
              "MaterialUI",
            ].map((skill, index) => (
              <li
                key={index}
                className="bg-gray-400 text-white rounded p-2 px-4 hover:bg-gray-600 transition-colors"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* About Me Section */}
        <div className="p-5">
          <h3 className="text-2xl font-semibold py-5">
            The Developer Behind the Code.
          </h3>
          <p className="text-lg leading-relaxed">
            I am a Junior Front-End Developer passionate about learning new
            technologies through self-driven projects. While I don't have formal
            education, I've developed my skills mainly through online courses.
            <br />
            I challenge myself by working on projects to deepen my knowledge of
            web development. My curiosity began as a warehouse operative, where
            I used a web application to manage and track orders and shipments.
            <br />I often reported bugs, which sparked my interest in pursuing
            web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
