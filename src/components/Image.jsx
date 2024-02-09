import React from "react";

const Image = ({ imgSrc, altText, style }) => {
  return <img src={imgSrc} alt={altText} className={style} />;
};

export default Image;
