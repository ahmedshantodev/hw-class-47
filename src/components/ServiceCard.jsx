import React from "react";
import Icon from "../components/Icon";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const ServiceCard = ({ cardStyle, iconname, headingText, paragraphText }) => {
  return (
    <div className={`${cardStyle} text-center mb-10`}>
      <Icon name={iconname} />
      <Heading
        tagName="h3"
        text={headingText}
        style="text-[24px] mt-[15px] capitalize mb-[10px] font-bold"
      />
      <Paragraph text={paragraphText} style="font-normal text-[#6C757D]" />
    </div>
  );
};

export default ServiceCard;
