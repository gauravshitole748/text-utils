import React from "react";

const Alert = (props) => {
  const firstUppercase = (word) => {
    const loWord = word.toLowerCase();
    return word.charAt(0).toUpperCase() + loWord.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          {firstUppercase(props.alert.type)} : {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
