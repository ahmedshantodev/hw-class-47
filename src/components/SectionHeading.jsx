import React from "react";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";

const SectionHeading = ({ paragraph, heading , alignment}) => {
  return (
    <div className={`text-${alignment}`}>
      <Paragraph text={paragraph} style="text-base bg-[#f5df4e] inline-block py-1 px-3"/>
      <Heading text={heading} style="text-[40px]" />
    </div>
  );
};

export default SectionHeading;
