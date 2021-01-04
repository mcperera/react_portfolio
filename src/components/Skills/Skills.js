import React from "react";

import MainTitle from "../MainTitle/MainTitle";
import ProgressCircle from "./ProgressCircle/ProgressCircle";
import ListSkills from "./ListSkills/ListSkills";

import "./Skills.css";

const skillLevels = [
  {
    id: "1",
    skillName: "Javascript (ES6+)",
    percentage: "73",
  },
  {
    id: "2",
    skillName: "HTML5 / (S)CSS",
    percentage: "87",
  },
  {
    id: "3",
    skillName: "React JS (MERN Stack)",
    percentage: "68",
  },
  {
    id: "4",
    skillName: "Flutter",
    percentage: "56",
  },
];

const listOfSkills = [
  {
    id: "5",
    skillName: "Node JS",
    percentage: "56",
  },
  {
    id: "4",
    skillName: "React Native",
    percentage: "56",
  },
  {
    id: "6",
    skillName: "C#",
    percentage: "56",
  },
  {
    id: "7",
    skillName: "C++",
    percentage: "56",
  },
  {
    id: "8",
    skillName: "SQL / PLSQL",
    percentage: "56",
  },
  {
    id: "8",
    skillName: "Socket io",
    percentage: "56",
  },
];

const Skills = () => {
  const skillsProgress = skillLevels.map((skill) => {
    return <ProgressCircle key={skill.id} {...skill} />;
  });

  const listSkills = listOfSkills.map((skill) => {
    return <ListSkills key={skill.id} {...skill} />;
  });

  return (
    <div className="skills-Box">
      <div className="scrollable">
        <MainTitle>Skills & Experience.</MainTitle>
        <p>
          Here are a few technologies which I love to work with and I've been
          working with recently.
        </p>
        <div className="flex-wrapper">{skillsProgress}</div>
        <p>
          Apart form that, I have experience with below languages and
          technologies as well.
        </p>
        <div className="skills-container">
          <ul className="listSkills">{listSkills}</ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
