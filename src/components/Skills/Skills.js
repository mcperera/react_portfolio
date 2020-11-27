import React from "react";

import "./Skills.css";

const Skills = () => {
  return (
    <div className='skills-Box'>
      <h1>Skills & Experience.</h1>
      <p>Here are a few technologies I've been working with recently</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi dolores
        voluptates consequuntur saepe vitae repellendus velit tempora nobis
        expedita dignissimos animi nulla eligendi pariatur rem quasi dolorem,
        temporibus qui corporis!
      </p>
      <div className='flex-wrapper'>
        <div className='single-chart'>
          <svg viewBox='0 0 36 36' className='circular-chart green'>
            <path
              className='circle-bg'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <path
              className='circle'
              strokeDasharray='30, 100'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <text x='18' y='20.35' className='percentage'>
              30%
            </text>
          </svg>
        </div>
        <div className='single-chart'>
          <svg viewBox='0 0 36 36' className='circular-chart blue'>
            <path
              className='circle-bg'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <path
              className='circle'
              strokeDasharray='75, 100'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <text x='18' y='20.35' className='percentage'>
              75%
            </text>
          </svg>
        </div>
        <div className='single-chart'>
          <svg viewBox='0 0 36 36' className='circular-chart orange'>
            <path
              className='circle-bg'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <path
              className='circle'
              strokeDasharray='90, 100'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <text x='18' y='20.35' className='percentage'>
              90%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Skills;
