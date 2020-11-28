import React from "react";

import ProgressCircle from "./ProgressCircle/ProgressCircle";

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

const Skills = () => {
  const skills = skillLevels.map((skill) => {
    return <ProgressCircle key={skill.id} {...skill} />;
  });

  return (
    <div className='skills-Box'>
      <div className='scrollable'>
        <h1 className='page-heading'>Skills & Experience.</h1>
        <p>
          Here are a few technologies I love to work with and I've been working
          with recently.
        </p>
        <div className='flex-wrapper'>{skills}</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          dolores voluptates consequuntur saepe vitae repellendus velit tempora
          nobis expedita dignissimos animi nulla eligendi pariatur rem quasi
          dolorem, temporibus qui corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          dolores voluptates consequuntur saepe vitae repellendus velit tempora
          nobis expedita dignissimos animi nulla eligendi pariatur rem quasi
          dolorem, temporibus qui corporis!
        </p>
      </div>
    </div>
  );
};

export default Skills;
