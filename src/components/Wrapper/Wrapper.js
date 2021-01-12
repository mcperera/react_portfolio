import React from "react";

import "./Wrapper.css";

import Particles from "react-particles-js";

export default function Wrapper({ children }) {
  return (
    <>
      <div className="wrapper">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 1,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "bottom",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
        {children}
      </div>
      {/* <div className="wrapper">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        {children}
      </div> */}
    </>
  );
}
