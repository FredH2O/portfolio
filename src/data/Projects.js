import moonway from "../images/moonway-travel-image.png";
import cafe from "../images/cafe-bianco-image.png";
import flextrap from "../images/flex-trap-clothing.png";
import plantcare from "../images/plant-care-guide.png";

const sanitizeURL = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.href;
  } catch (error) {
    return `Error processing URL, ${error.name}`;
  }
};

const projects = [
  {
    image: moonway,
    title: "Moonway Travels",
    description:
      "A single-page travel application showcasing hotels with information fetched dynamically. Built with React, Tailwind CSS, and Axios.",
    link: sanitizeURL("https://fredh2o.github.io/moonway-travel/"),
  },
  {
    image: cafe,
    title: "Café Bianco",
    description:
      "A stylish landing page for a café, highlighting its menu and ambiance with a clean, modern design.",
    link: sanitizeURL("https://fredh2o.github.io/cafe-bianco"),
  },
  {
    image: flextrap,
    title: "Flex Trap Clothing",
    description:
      "An e-commerce demo for a clothing brand, featuring a trendy design and user-friendly layout.",
    link: sanitizeURL("https://fredh2o.github.io/Flex-Trap-Clothing.co/"),
  },
  {
    image: plantcare,
    title: "Plant Care",
    description:
      "A web app for houseplant enthusiasts, providing tips on care, origins, and temperature requirements for various plants.",
    link: sanitizeURL("https://fredh2o.github.io/plant-care/"),
  },
];

export default projects;
