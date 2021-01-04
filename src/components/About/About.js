import React, { useState, useEffect } from "react";

import MainTitle from "../MainTitle/MainTitle";

import "./About.css";
// import profilePic from "../../assets/profilePicture/Me.jpg";
const url = "https://api.github.com/users/mcperera";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [getImg, setImg] = useState("");

  const getGitImg = async (imgUrl) => {
    const res = await fetch(imgUrl);
    const user = await res.json();
    setImg(user.avatar_url);
    setIsLoading(false);
  };

  useEffect(() => {
    getGitImg(url);
  }, []);

  const Loading = () => <p>Loading...</p>;

  return (
    <div className="about-Box">
      <div className="about-warapper">
        <MainTitle>About Me.</MainTitle>
        <div className="text-content">
          <p>
            Hello! I'm Madushan, a software engineer based in Colombo, Sri
            Lanka.
            <br />I enjoy creating things that live on the internet, whether
            that be websites, mobile applications, or anything in between. My
            goal is to always build products that provide pixel-perfect,
            performant experiences.
          </p>
          <p>
            Shortly after graduating from{" "}
            <a
              href="https://www.cardiffmet.ac.uk/"
              target="_blank"
              rel="noopener noreferrer">
              Cardiff Metropolitan University
            </a>
            , I joined the engineering team at{" "}
            <a
              href="https://www.ifs.com/"
              target="_blank"
              rel="noopener noreferrer">
              IFS R&D International (PVT) Ltd
            </a>
            , where I work on a wide variety of interesting and meaningful
            projects on a daily basis.
          </p>
        </div>
        <div className="img-box">
          {isLoading ? <Loading /> : <img src={getImg} alt="Madushan-Perera" />}
        </div>
      </div>
    </div>
  );
};

export default About;
