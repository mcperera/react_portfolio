import React from "react";

import "./About.css";
// import profilePic from "../../assets/profilePicture/Me.jpg";

const About = () => {
  return (
    <div className='about-Box'>
      <div className='about-warapper'>
        <h1>About Me.</h1>
        <div className='text-content'>
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
              href='https://www.cardiffmet.ac.uk/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Cardiff Metropolitan University
            </a>
            , I joined the engineering team at{" "}
            <a
              href='https://www.ifs.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              IFS R&D International (PVT) Ltd
            </a>
            , where I work on a wide variety of interesting and meaningful
            projects on a daily basis.
          </p>
        </div>
        <div className='img-box'>
          <img
            src='https://avatars2.githubusercontent.com/u/39242742?s=460&u=c2841893892e337d4ded2d6cc570cede8f006f6e&v=4'
            alt='Madushan-Perera'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
