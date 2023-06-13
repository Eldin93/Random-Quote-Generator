import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Quote from "./components/Quote";
import LinkIcons from "./components/LinkIcons";
import GenerateQuote from "./components/GenerateQuote";
import "./index.css";

function App() {
  const [quote, setQuote] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    generateNewQuote();
  }, []);

  const generateNewQuote = async () => {
    try {
      const response = await fetch(
        "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2",
        {
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      const quoteText = data[0].text;
      const quoteAuthor = data[0].author;
      const newColor = getRandomHexColor();
      document.body.style.transition = "background-color 2s ease";
      document.body.style.backgroundColor = newColor;
      setQuote({ text: quoteText, author: quoteAuthor });
      setBackgroundColor(newColor);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const getRandomHexColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <div className="d-flex justify-content-center align-items-center custom-property container-lg p-5 bg-light">
      <div
        className="app "
        style={{ color: backgroundColor, transition: "2s ease" }}
      >
        <Quote quote={quote} />
        <div className="d-flex align-items-center justify-content-between mt-5 mx-2 ">
          <LinkIcons
            iconStyle={{ color: backgroundColor, transition: "2s ease" }}
          />
          <GenerateQuote
            onClick={generateNewQuote}
            buttonStyle={{
              backgroundColor: backgroundColor,
              color: "#ffffff",
              transition: "2s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
