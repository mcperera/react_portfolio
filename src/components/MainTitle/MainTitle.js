import React from "react";

import "./MainTitle.css";

function MainTitle({ children }) {
  return (
    <div className="heading">
      <h1 className="page-heading">{children}</h1>
    </div>
  );
}

export default MainTitle;
