import React from "react";

import "./Header.css";

import ContactMe from "./ContactMe";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Header() {
  return (
    <div className="header">
      <div className="header-says">
        <h2>Hi, I'm </h2>
        <h1 className="name">Madushan Perera.</h1>
        <p>" I like to build things for Mobile and Web. Do you ? "</p>
      </div>
      <div className="header-desc">
        <p>
          I’m a software engineer, <br /> building (and occasionally designing)
          exceptional websites, applications, and <br /> everything in between.
        </p>
      </div>
      <div className="contact">
        <ContactMe />
        <SocialMedia />
      </div>
    </div>
  );
}
