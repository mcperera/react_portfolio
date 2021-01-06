import React, { useState } from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

import "./ShowCase.css";

function ShowCase({ img, title, desc, gitUrl, webUrl }) {
  const [showItem, setShowItem] = useState(false);

  return (
    <div
      className="showCase"
      style={{ backgroundImage: `url(${img ? img : ""})` }}
      onMouseEnter={() => setShowItem(true)}
      onMouseLeave={() => setShowItem(false)}>
      <div className="caseHeading relativeBlock">
        <h1>{title}</h1>
      </div>
      {showItem && desc && (
        <div className="desc-with-links relativeBlock">
          <p>{desc}</p>
          <div className="links">
            {gitUrl && (
              <a href={gitUrl} target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
            )}
            {webUrl && (
              <a href={webUrl} target="_blank" rel="noreferrer">
                <AspectRatioIcon />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowCase;
