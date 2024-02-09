import React from "react";
import Icon from "./Icon";

const Button = ({buttonLink , style , iconAlighnment, iconname , text}) => {
  return (
    <button href={buttonLink} className={`${style}`}>
      {iconAlighnment == "left" || iconAlighnment == "both" ? (
        <Icon name={iconname} />
      ) : null}
      {text}
      {iconAlighnment == "right" || iconAlighnment == "both" ? (
        <Icon name={iconname} />
      ) : null}
    </button>
  );
};

export default Button;
