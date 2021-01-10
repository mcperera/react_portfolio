import React from "react";

import MainTitle from "./../MainTitle/MainTitle";
import ShowCase from "./ShowCase/ShowCase";

import portfolio from "../../assets/portfolio/portfolio.png";
import spotify from "../../assets/portfolio/spotify-react.png";
import books from "../../assets/portfolio/books.jpg";
import rsvp from "../../assets/portfolio/rsvp.png";

import "./Work.css";

const projects = [
  {
    img: portfolio,
    title: "Personal Portfolio",
    desc:
      "This portfolio site is developed by using React.js. It's to improve my skills and share what I developed with you.",
    //gitUrl: "https://github.com/mcperera/spotify-clone-react",
    webUrl: "https://mcperera.com/",
  },
  {
    img: spotify,
    title: "Spotify Clone",
    desc:
      "Simple UI of a music player which is made with Spotify API. Premium account required for player options.",
    gitUrl: "https://github.com/mcperera/spotify-clone-react",
    webUrl: "https://spotify-clone-react-mp.netlify.app/",
  },
  {
    img: books,
    title: "Manage Books",
    desc:
      "Complete CRUD operation using MERN stack. Use git link to find back-end api part.",
    gitUrl: "https://github.com/mcperera/mern-crud-frontend",
    webUrl: "https://book-manager-mc.netlify.app/",
  },
  {
    img: rsvp,
    title: "RSVP",
    desc:
      "Application for list invite people, view overall invitees and attendance.",
    gitUrl: "https://github.com/mcperera/react-rsvp",
    webUrl: "https://rsvp-react-mc.netlify.app/",
  },
  // {
  //   title: "Coming Soon..",
  // },
];

function Work() {
  const showCase = projects.map((project, index) => {
    return <ShowCase key={index} {...project} />;
  });

  return (
    <div className="work-box">
      <MainTitle>Few things I've Built..</MainTitle>
      <div className="showCase-container">{showCase}</div>
    </div>
  );
}

export default Work;
