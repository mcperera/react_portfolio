import React from "react";

import MainTitle from "./../MainTitle/MainTitle";
import ShowCase from "./ShowCase/ShowCase";

import portfolio from "../../assets/portfolio/portfolio.png";
import spotify from "../../assets/portfolio/spotify-react.png";
import books from "../../assets/portfolio/books.jpg";

import "./Work.css";

const projects = [
  {
    img: portfolio,
    title: "Personal Portfolio",
    desc: (
      <p>
        This portfolio site is developed by using React.js. <br /> It's to
        improve my skills and share what I developed with you.
      </p>
    ),
    //gitUrl: "https://github.com/mcperera/spotify-clone-react",
    webUrl: "https://mcperera.com/",
  },
  {
    img: spotify,
    title: "Spotify Clone",
    desc: (
      <p>
        Simple UI of a music player which is made with Spotify API. Premium
        account required for player options.
      </p>
    ),
    gitUrl: "https://github.com/mcperera/spotify-clone-react",
    webUrl: "https://spotify-clone-react-mp.netlify.app/",
  },
  {
    img: books,
    title: "Manage Books",
    desc: (
      <p>
        Complete CRUD operation using MERN stack. Use git link to find back-end
        api part.
      </p>
    ),
    gitUrl: "https://github.com/mcperera/mern-crud-frontend",
    webUrl: "https://book-manager-mc.netlify.app/",
  },
  // {
  //   title: "Working on it..",
  //   desc: <p>E-Commerce Application</p>,
  // },
  {
    title: "Coming Soon..",
  },
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
