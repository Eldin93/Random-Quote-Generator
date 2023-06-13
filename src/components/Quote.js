import React from "react";

function Quote({ quote }) {
  return (
    <div className="quote text-center ">
      <h5>"{quote.text}"</h5>
      <p className="quote-author">{quote.author}</p>
    </div>
  );
}

export default Quote;
