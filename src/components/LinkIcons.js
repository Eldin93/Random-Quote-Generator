import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function LinkIcons({ iconStyle }) {
  return (
    <div className="link-icons">
      <a
        href="https://github.com/Eldin93/Random-Quote-Generator"
        target="_blank"
      >
        <i className="bi bi-github fs-2" style={iconStyle}></i>
      </a>
    </div>
  );
}

export default LinkIcons;
