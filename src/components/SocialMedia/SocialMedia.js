import React from "react";

import "./SocialMedia.css";

// import twitter from "../../assets/socialMedias/twitter2.svg";
// import linkedin from "../../assets/socialMedias/linkedin2.svg";
// import github from "../../assets/socialMedias/github2.svg";
// import email from "../../assets/socialMedias/email2.svg";

const icons = [
  {
    id: "2",
    name: "Linkedin",
    element: "fab fa-twitter fa-lg",
    url: "https://www.linkedin.com/in/wwmcperera",
  },
  {
    id: "2",
    name: "Linkedin",
    element: "fab fa-linkedin-in fa-lg",
    url: "https://www.linkedin.com/in/wwmcperera",
  },
  {
    id: "1",
    name: "GitHub",
    element: "fab fa-github fa-lg",
    url: "https://github.com/mcperera",
  },
  {
    id: "3",
    name: "Email",
    element: "fas fa-envelope fa-lg",
    url: "mailto:madushanperera3817@gmail.com",
  },
];

const SocialMedia = () => {
  const links = icons.map((icon) => {
    return (
      <a key={icon.id} href={icon.url} className='social-links'>
        <i class={icon.element}></i>
      </a>
    );
  });

  return <div className='socialBox'>{links}</div>;
};

export default SocialMedia;
