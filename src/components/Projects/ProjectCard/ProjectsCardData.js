import arcade from "../../.././assets/img/react-arcade.png";
import project2 from "../../.././assets/img/project2.jpg";
import portfolio from "../../.././assets/img/portfolio.png";
import note from "../../.././assets/img/note-taker.png";
import passgen from "../../.././assets/img/passgen.png";
import weather from "../../.././assets/img/weather.png";

const projectCardData = [
  {
    imgsrc: arcade,
    title: "React Arcade",
    description:
      "This was our final class project for our boot camp. With the help of two friends we wanted to try to make a game each. My game was Bouncy ball. I learned a lot about animations and how react hooks work with this project.",
    view: "https://limitless-dawn-17325.herokuapp.com/",
    source: "https://github.com/LilCalc/react-arcade",
  },
  {
    imgsrc: project2,
    title: "React Blog",
    description:
      "This project is not complete yet. The html and css is done for the most part and I am working on the backend currently. This is the first project I am trying to do after school. SORRY it is currently not deployable at this time.",
    view: "",
    source: "https://github.com/bwilk483/react-blog",
  },
  {
    imgsrc: portfolio,
    title: "React Portfolio",
    description:
      "This portfolio is made with react, javascript and basic css no frameworks. I chose to use basic css to challenge myself to understand css more with out a framework to help me with the layout. ",
    view: "https://gentle-reef-35366.herokuapp.com/",
    source: "https://github.com/bwilk483/reactPortfolio",
  },
  {
    imgsrc: note,
    title: "Note Taker",
    description:
      "Note Taker is a project that I completed during my boot camp you are able to add new notes, delete notes, and recall old notes to look back at them",
    view: "https://github.com/bwilk483/noteTaker",
    source: "https://www.youtube.com/watch?v=0h2b4ftbZcU",
  },
  {
    imgsrc: passgen,
    title: "Password Generator",
    description:
      "This password generator is made with HTML, CSS, and JavaScript. It is designed to be used to generate a password for users",
    view: "https://bwilk483.github.io/chall-passGen/",
    source: "https://github.com/bwilk483/chall-passGen",
  },
  {
    imgsrc: weather,
    title: "Weather Dashboard",
    description:
      "This is a weather app made with the openweathermap.org api. it also uses HTLM, CSS and JavaScript and you are able to search any city to get current weather in that city.",
    view: "https://bwilk483.github.io/weather-dashboard/",
    source: "https://github.com/bwilk483/weather-dashboard",
  },
];

export default projectCardData;
