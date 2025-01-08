import BorderStyling from "./BorderStyling";
import Stack from "./Stack";
import html5Image from "../images/html5.svg";
import css3Image from "../images/css3.svg";
import javascriptImage from "../images/javascript.svg";
import reactImage from "../images/react.svg";
import tailwindImage from "../images/tailwind.svg";
import bootstrapImage from "../images/bootstrap.svg";
import materialuiImage from "../images/materialui.svg";
import responsiveImage from "../images/responsive.svg";

const images = [
  {
    id: 8,
    img: responsiveImage,
    title: "Responsive",
  },
  {
    id: 7,
    img: materialuiImage,
    title: "MaterialUI",
  },
  {
    id: 6,
    img: bootstrapImage,
    title: "Bootstrap",
  },
  {
    id: 5,
    img: tailwindImage,
    title: "TailwindCSS",
  },
  {
    id: 4,
    img: reactImage,
    title: "React",
  },
  {
    id: 3,
    img: javascriptImage,
    title: "JavaScript",
  },
  {
    id: 2,
    img: css3Image,
    title: "CSS3",
  },
  {
    id: 1,
    img: html5Image,
    title: "HTML5",
  },
];

const AboutMe = () => {
  return (
    <section className="py-10 px-4 rounded">
      <div className="text-center mb-8 flex flex-col items-center">
        <h2 className="text-4xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-white">
          Here, you can learn more about me, what I do, and my skills, with a
          focus on programming and technology.
        </p>
        <BorderStyling />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Section */}
        <div className="p-4 flex flex-col ">
          <h3 className="text-2xl font-bold lg:text-left text-center">
            My Tech Stack
          </h3>
          <Stack
            randomRotation={false}
            sensitivity={180}
            cardDimensions={{ width: "100%", height: 400 }}
            cardsData={images}
          />
        </div>
        {/* About Me Section */}
        <div className="p-5 text-center lg:text-left">
          <h3 className="text-2xl font-semibold mb-3">
            The Developer Behind the Code.
          </h3>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-white">
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
