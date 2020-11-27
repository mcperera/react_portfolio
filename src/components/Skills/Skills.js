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
              strokeDasharray='87, 100'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <text x='18' y='20.35' className='percentage'>
              87%
            </text>
          </svg>
          <p>HTML / ( S )CSS</p>
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
              strokeDasharray='70, 100'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <text x='18' y='20.35' className='percentage'>
              70%
            </text>
          </svg>
          <p>Javascript</p>
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
              strokeDasharray='67, 100'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <text x='18' y='20.35' className='percentage'>
              67%
            </text>
          </svg>
          <p>React JS ( MERN )</p>
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
              strokeDasharray='43, 100'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <text x='18' y='20.35' className='percentage'>
              43%
            </text>
          </svg>
          <p>Flutter</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
