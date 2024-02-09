import React from "react";

const Heading = (props) => {
  return props.tagName ? (
    <props.tagName className={props.style}>{props.text}</props.tagName>
  ) : (
    <h1 className={props.style}>{props.text}</h1>
  );
};

export default Heading;
