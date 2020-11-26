import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className='about-Box'>
      <h1>About Me</h1>
      <div className='text-content'>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum qui
          minima dignissimos asperiores tenetur eum distinctio nobis! Inventore
          distinctio atque quas nobis, reiciendis rem blanditiis eveniet. Harum
          porro corrupti mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus illo modi ipsa numquam, voluptas ipsam porro alias quod
          dolor nesciunt quisquam.
        </p>
      </div>
      <div className='img-box'>
        <img
          src='https://avatars2.githubusercontent.com/u/39242742?s=460&u=c2841893892e337d4ded2d6cc570cede8f006f6e&v=4'
          alt='Madushan-Perera'
        />
      </div>
    </div>
  );
};

export default About;
