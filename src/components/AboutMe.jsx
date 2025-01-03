import BorderStyling from "./BorderStyling";

const AboutMe = () => {
  return (
    <section className="py-10 px-4 rounded">
      <div className="text-center mb-8 flex flex-col items-center">
        <h2 className="text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg text-gray-600">
          Here, you can learn more about me, what I do, and my skills, with a
          focus on programming and technology.
        </p>
        <BorderStyling />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Section */}
        <div className="p-4 flex flex-col">
          <h3 className="text-2xl font-bold lg:text-left text-center">
            My Skills
          </h3>
          <ul className="flex flex-wrap gap-3 lg:p-10 py-10 px-1  justify-center lg:justify-start">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "TailwindCSS",
              "Bootstrap",
              "GIT",
              "Github",
              "Responsive Design",
              "MaterialUI",
            ].map((skill, index) => (
              <li
                key={index}
                className="bg-gray-400 text-white rounded px-5 py-2 hover:bg-gray-600 transition-colors"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* About Me Section */}
        <div className="p-5 text-center lg:text-left">
          <h3 className="text-2xl font-semibold mb-3">
            The Developer Behind the Code.
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            I am a Junior Front-End Developer passionate about creating
            user-focused and visually engaging web applications. My interest in
            web development began while working as a warehouse operative, where
            I interacted with a web-based system for managing orders and
            shipments, which sparked my curiosity in technology.
            <br />
            <br />
            Although I don't have formal education in the field, I've taken a
            self-driven approach to learning through online courses, tutorials,
            and books. This has helped me build a strong foundation in HTML,
            CSS, JavaScript, React, and libraries like Tailwind CSS and Material
            UI.
            <br />
            <br />
            While I haven't contributed to professional projects yet, I focus on
            self-driven projects to challenge myself and expand my knowledge. I
            am motivated by the constant evolution of web technologies and
            strive to stay updated by experimenting with new tools and
            techniques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
