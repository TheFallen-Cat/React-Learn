import PropTypes from "prop-types";
import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    console.log("Value Changed");
    setText(event.target.value);
  };

  const convertLowercase = (event) => {
    let lowercaseConverted = text.toLowerCase();
    setText(lowercaseConverted);
  };

  const convertUppercase = (event) => {
    let lowercaseConverted = text.toUpperCase();
    setText(lowercaseConverted);
  };

  const copyText = (event) => {
    navigator.clipboard.writeText(text);
  };

  const removeExtraSpaces = (event) => {
    let formattedText = text.split(/[ ]+/);
    setText(formattedText.join(" "));
  };

  const words = (event) => {
    let formattedText = text.split(/[ ]+/).join(" ");
    formattedText = formattedText.trim();
    return formattedText.split(" ").length;
  };
  const averageReadingTime = (textToRead) => {
    let lengthOfWords = textToRead.split(" ").length;

    let readTime = (lengthOfWords / 220) * 60;

    return Math.round(readTime * 10) / 10;
  };

  return (
    <div className="container">
      <div
        className="form-group"
        style={{
          color: props.theme === "light" ? "black" : "white",
        }}
      >
        <h3> {props.heading} </h3>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myText"
          rows="10"
          placeholder="Enter your text..."
          style={{
            backgroundColor: props.theme === "light" ? "white" : "#212529",
            color: props.theme === "light" ? "black" : "white",
            "::placeholder": { color: "red" },
          }}
        ></textarea>
      </div>

      <button className="btn btn-primary my-4 mx-2" onClick={convertLowercase}>
        Convert to Lowercase
      </button>

      <button className="btn btn-primary my-4 mx-2" onClick={convertUppercase}>
        Convert to Uppercase
      </button>

      <button className="btn btn-primary my-4 mx-2" onClick={copyText}>
        Copy Text
      </button>

      <button className="btn btn-primary my-4 mx-2" onClick={removeExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div
        className="container"
        style={{
          color: props.theme === "light" ? "black" : "white",
        }}
      >
        <h2>Text Results</h2>
        <h6>Words: {words(text)} </h6>
        <h6>Characters: {text.length} </h6>
        <h6>Average Read Time: {averageReadingTime(text)} seconds.</h6>
        <h6>Paragraphs: {text.split("\n\n").length}</h6>
      </div>
    </div>
  );
}

Form.propTypes = {
  heading: PropTypes.string,
};

Form.defaultProps = {
  textarea_heading: "New Text",
};
