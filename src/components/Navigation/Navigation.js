import React, { useState } from "react";

import NavButton from "./NavButton/NavButton";
import NavItem from "./NavItems/NavItem";

import "./Navigation.css";

// const homeSVG = (
//   <svg
//     height='20px'
//     viewBox='0 1 511 511.999'
//     width='20px'
//     xmlns='http://www.w3.org/2000/svg'
//   >
//     <path d='m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0' />
//   </svg>
// );

// const aboutSVG = (
//   <svg
//     id='Layer_1'
//     height='20px'
//     viewBox='0 0 512 512'
//     width='20px'
//     xmlns='http://www.w3.org/2000/svg'
//   >
//     <g>
//       <path d='m256 512c-68.38 0-132.667-26.628-181.02-74.98s-74.98-112.64-74.98-181.02 26.628-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.628 181.02 74.98 74.98 112.64 74.98 181.02-26.628 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-480c-123.514 0-224 100.486-224 224s100.486 224 224 224 224-100.486 224-224-100.486-224-224-224z' />
//       <path d='m256 368c-8.836 0-16-7.164-16-16 0-40.386 15.727-78.354 44.285-106.912 17.872-17.873 27.715-41.635 27.715-66.911 0-27.668-22.509-50.177-50.177-50.177h-3.646c-27.668 0-50.177 22.509-50.177 50.177v5.823c0 8.836-7.164 16-16 16s-16-7.164-16-16v-5.823c0-45.313 36.864-82.177 82.177-82.177h3.646c45.313 0 82.177 36.864 82.177 82.177 0 33.823-13.171 65.622-37.088 89.539-22.514 22.513-34.912 52.446-34.912 84.284 0 8.836-7.164 16-16 16z' />
//       <path d='m256.02 432c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16z' />
//     </g>
//   </svg>
// );

// const skillsSVG = (
//   <svg
//     id='Layer_1'
//     height='20px'
//     width='20px'
//     xmlns='http://www.w3.org/2000/svg'
//   >
//     <g>
//       <title>background</title>
//       <rect fill='none' id='canvas_background' height='402' width='582' />
//     </g>
//     <g>
//       <title>Layer 1</title>
//       <path
//         id='svg_1'
//         d='m29.6,12.7c-0.1,-0.5 -0.6,-0.8 -1.1,-0.8c-1.2,0.2 -2.4,-0.4 -3,-1.5c-0.6,-1 -0.5,-2.4 0.2,-3.3c0.3,-0.4 0.3,-1 -0.1,-1.3c-1.6,-1.5 -3.5,-2.6 -5.6,-3.2c-0.5,-0.1 -1,0.1 -1.2,0.6c-0.5,1.1 -1.6,1.8 -2.8,1.8s-2.3,-0.7 -2.8,-1.8c-0.2,-0.5 -0.7,-0.8 -1.2,-0.6c-2.1,0.6 -4,1.7 -5.6,3.3c-0.4,0.3 -0.4,0.9 -0.1,1.3c0.7,1 0.8,2.3 0.2,3.3c-0.6,1 -1.8,1.6 -3,1.5c-0.5,-0.1 -1,0.3 -1.1,0.8c-0.3,1 -0.4,2.1 -0.4,3.2s0.1,2.2 0.4,3.3c0.1,0.5 0.6,0.8 1.1,0.7c1.2,-0.2 2.4,0.4 3,1.5c0.6,1 0.5,2.4 -0.2,3.3c-0.3,0.4 -0.3,1 0.1,1.3c1.6,1.5 3.6,2.7 5.7,3.3c0.5,0.1 1,-0.1 1.2,-0.6c0.5,-1.1 1.6,-1.8 2.8,-1.8s2.3,0.7 2.8,1.8c0.2,0.4 0.5,0.6 0.9,0.6c0.1,0 0.2,0 0.3,0c2.1,-0.6 4.1,-1.8 5.7,-3.3c0.4,-0.4 0.4,-0.9 0.1,-1.3c-0.7,-1 -0.8,-2.3 -0.2,-3.3c0.6,-1 1.8,-1.6 3,-1.5c0.5,0.1 1,-0.3 1.1,-0.8c0.3,-1.1 0.4,-2.2 0.4,-3.3s-0.3,-2.1 -0.6,-3.2zm-17.9,5.6c0.4,0.4 0.4,1 0,1.4c-0.2,0.2 -0.4,0.3 -0.7,0.3s-0.5,-0.1 -0.7,-0.3l-3,-3c-0.4,-0.4 -0.4,-1 0,-1.4l3,-3c0.4,-0.4 1,-0.4 1.4,0s0.4,1 0,1.4l-2.3,2.3l2.3,2.3zm7.2,-5.9l-4,8c-0.2,0.4 -0.5,0.6 -0.9,0.6c-0.2,0 -0.3,0 -0.4,-0.1c-0.5,-0.2 -0.7,-0.8 -0.4,-1.3l4,-8c0.2,-0.5 0.8,-0.7 1.3,-0.4c0.4,0.2 0.6,0.8 0.4,1.2zm5.8,4.3l-3,3c-0.2,0.2 -0.4,0.3 -0.7,0.3s-0.5,-0.1 -0.7,-0.3c-0.4,-0.4 -0.4,-1 0,-1.4l2.3,-2.3l-2.3,-2.3c-0.4,-0.4 -0.4,-1 0,-1.4s1,-0.4 1.4,0l3,3c0.4,0.4 0.4,1 0,1.4z'
//       />
//     </g>
//   </svg>
// );

const navItems = [
  {
    id: 1,
    itemName: "Home",
    icon: "fas fa-home",
    pathName: "/",
  },
  {
    id: 2,
    itemName: "About",
    icon: "far fa-question-circle",
    pathName: "/about",
  },
  {
    id: 3,
    itemName: "Skills",
    icon: "fas fa-file-code",
    pathName: "/skills",
  },
];

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav((preState) => {
      return !preState;
    });
  };

  const navItem = navItems.map((item) => {
    return <NavItem key={item.id} pathName={item.pathName} icon={item.icon} />;
  });

  return (
    <>
      <NavButton navClick={handleClick} hideNavButton={showNav} />
      <div className={showNav ? `showNavigationBox` : `hideNavigationBox`}>
        <div className='close' onClick={handleClick}></div>
        <div className='nav-items'>{navItem}</div>
      </div>
    </>
  );
};

export default Navigation;
