import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

import "./ShowCase.css";

function ShowCase({ img, title, desc, gitUrl, webUrl }) {
  return (
    <div
      className="showCase"
      style={{ backgroundImage: img ? `url(${img})` : "" }}>
      <div className="showTitle">
        <h2>{title}</h2>
        <div className={`showInfo desc ${!img ? "showInfoNoimg" : ""}`}>
          {desc}
          <div className="iconWrapper">
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
      </div>
    </div>
  );
}

export default ShowCase;
