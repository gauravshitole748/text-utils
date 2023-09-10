import React from "react";

const Alert = (props) => {
  const firstUppercase = (word) => {
    const loWord = word.toLowerCase();
    return word.charAt(0).toUpperCase() + loWord.slice(1);
  };

  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        {firstUppercase(props.alert.type)} : {props.alert.msg}
      </div>
    )
  );
};

export default Alert;
