import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    //console.log("hangleOnChange called")
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "info");
  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleUpOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    console.log(msg);
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  };

  const getWordCnt = (str) => {
    return str.split(" ").filter((word) => {
      return word !== "";
    }).length;
  };

  return (
    <>
      <div className="container">
        <div
          className="mb-3"
          style={{
            color: props.mode === "light" ? "#000" : "#FFF",
          }}>
          <h2 className="my-3">{props.title}</h2>
          <div className="d-flex">
            <div className="p-2 w-100">
              <textarea
                className="form-control"
                style={{
                  backgroundColor:
                    props.mode === "light" ? "#FAFAFA" : "#262626",
                  color: props.mode === "light" ? "#000" : "#FFF",
                }}
                id="exampleFormControlTextarea1"
                rows="8"
                placeholder="--Enter text here--"
                value={text}
                onChange={handleOnChange}></textarea>
            </div>
            <div className="p-2 flex-shrink-1">
              <button
                type="button"
                className="btn-close mb-2"
                aria-label="Close"
                onClick={handleClearClick}></button>
              {/* <button
                type="button"
                className="btn-close mt-3"
                aria-label="Close"
                onClick={handleClearClick}
              ></button> */}
              <i
                onClick={handleCopy}
                className="bi bi-clipboard"
                style={{
                  fontSize: "25px",
                  color: "green",
                  cursor: "pointer",
                }}></i>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-sm-start">
          <button
            className={`btn btn-${props.mode} m-1`}
            onClick={handleLowOnClick}
            disabled={text === "" && true}>
            Convert to Lowercase
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode} m-1`}
            onClick={handleUpOnClick}
            disabled={text === "" && true}>
            Convert to Uppercase
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode} m-1`}
            onClick={speak}
            disabled={text === "" && true}>
            Speak
          </button>
          <button
            type="button"
            className={`btn btn-${props.mode} m-1`}
            onClick={handleRemoveSpaces}
            disabled={text === "" && true}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "#000" : "#FFF",
        }}>
        <h2>Your text summary:</h2>
        <p>
          {/* {text.split(" ").length} word(s) and {text.length} character(s) */}
          {getWordCnt(text)} word(s) and {text.length} character(s)
        </p>
        <span>({0.008 * text.split(" ").length} Minutes to read)</span>
      </div>
    </>
  );
}
