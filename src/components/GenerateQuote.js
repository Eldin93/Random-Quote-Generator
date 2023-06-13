import React from "react";

function GenerateQuoteButton({ onClick, buttonStyle }) {
  return (
    <div>
      <button
        className="btn btn-primary custom-btn"
        style={buttonStyle}
        onClick={onClick}
      >
        New Quote
      </button>
    </div>
  );
}

export default GenerateQuoteButton;
