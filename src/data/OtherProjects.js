import gymWebsite from "../images/gym-website.png";
import bakery from "../images/bakery.png";
import weather from "../images/weather.png";
import jokeGenerator from "../images/joke-generator.png";
import dogBreed from "../images/dog-info.png";
import rockPaperScissors from "../images/rock-paper-scissors.png";
import javascriptQuiz from "../images/javascript-quiz.png";

const sanitizeURL = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.href;
  } catch (error) {
    return `Error processing URL, ${error.name}`;
  }
};

const otherproject = [
  {
    image: gymWebsite,
    title: "Gym Website",
    description:
      "This project showcases a responsive gym website with key sections such as facilities, membership plans, and programs. Built with HTML, CSS, JavaScript, and Bootstrap, it demonstrates a clean design and practical application of web development skills.",
    link: sanitizeURL("https://fredh2o.github.io/Gym-Website/"),
  },
  {
    image: bakery,
    title: "Pence's Bakery",
    description:
      "A React app showcasing bakery items with dynamic features like add-to-cart, responsive design, and detail modals. Built with React and Bootstrap, it highlights skills in state management and modern frontend development.",
    link: sanitizeURL("https://fredh2o.github.io/Bakery-Shop/"),
  },
  {
    image: weather,
    title: "Weather App",
    description:
      "Of course what is a portfolio without a responsive web app displaying real-time weather for any location. Built with HTML, CSS, and JavaScript, it features location search, dynamic updates, and animated weather icons, showcasing skills in API integration and clean, responsive design.",
    link: sanitizeURL("https://fredh2o.github.io/Weather-App/"),
  },
  {
    image: dogBreed,
    title: "Dog Breed Info",
    description:
      "Random Dog Breed Info is a React-based app that retrieves and displays information about various dog breeds using a public API, featuring responsive design and smooth animations.",
    link: sanitizeURL("https://fredh2o.github.io/Random-Dog-Breed-Info/"),
  },
  {
    image: jokeGenerator,
    title: "Joke-Generator",
    description:
      "Joke Generator is a fun, interactive web app built with HTML, CSS, and JavaScript that generates random jokes with a click, providing users with a humorous break. It's easily customizable and great for learning front-end development.",
    link: sanitizeURL("https://fredh2o.github.io/Joke-Generator/"),
  },
  {
    image: rockPaperScissors,
    title: "Rock, Paper, Scissors!",
    description:
      "Rock Paper Scissors is a web-based game where you play against a computer opponent. Developed with HTML, CSS, and JavaScript, it features score tracking and a responsive design for desktop and mobile.",
    link: sanitizeURL("https://fredh2o.github.io/Rock-Paper-Scissor-Game/"),
  },
  {
    image: javascriptQuiz,
    title: "JavaScript Quiz",
    description:
      "This is a simple quiz game built with HTML, CSS, and JavaScript. The game features multiple-choice questions and keeps track of the player's score. It also utilizes lodash for utility functions and Bootstrap Icons for a polished interface.",
    link: sanitizeURL("https://fredh2o.github.io/Javascript-Quiz/"),
  },
];

export default otherproject;
