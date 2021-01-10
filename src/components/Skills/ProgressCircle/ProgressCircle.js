import React, { useState, useEffect, useRef } from "react";

import "./ProgressCircle.css";

const ProgressCircle = ({ percentage, skillName }) => {
  const [counter, setCounter] = useState(0);
  const isMountedRef = useRef(true);

  function animateValue(start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      //obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (isMountedRef) {
        setCounter(Math.floor(progress * (end - start) + start));
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  useEffect(() => {
    if (isMountedRef) {
      animateValue(0, percentage, 1000);
    }
    return () => {
      isMountedRef.current = false;
    };
  }, [percentage]);

  return (
    <>
      <div className="single-chart">
        <svg viewBox="0 0 36 36" className="circular-chart color">
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            {counter}%
          </text>
        </svg>
        <p>{skillName}</p>
      </div>
    </>
  );
};

export default ProgressCircle;
