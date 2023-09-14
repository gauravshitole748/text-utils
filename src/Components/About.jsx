import React from "react";

const About = (props) => {
  return (
    <>
      <h1>About Info:</h1>
      <div
        className="accordion accordion-flush-dark"
        data-bs-theme={props.mode}
        id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne">
              Analyze Your text
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            // data-bs-parent="#accordionFlushExample" --> This makes accordian stays OPEN
          >
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or sentence!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo">
              Free to use
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            // data-bs-parent="#accordionFlushExample" --> This makes accordian stays OPEN
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            // data-bs-parent="#accordionFlushExample" --> This makes accordian stays OPEN
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
