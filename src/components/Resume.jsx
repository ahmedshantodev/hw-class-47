import React from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Flex from "./Flex";
import Heading from "./Heading";
import Achievement from "./Achievement";
import SkillBar from "./SkillBar";

const Resume = () => {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          alignment={"center"}
          paragraph={"Resume"}
          heading={"A summary of My Resume"}
        />
        <Flex style={"justify-between mt-[80px]"}>
          <div className="education w-[48%]">
            <Heading tagName="h4" text="My Education" style="text-[24px]" />
            <div className="item mt-5 border-l-[3px] border-[#f4de4e]">
              <Achievement
                title={"Master in Computer Engineering"}
                subtitle={"Harvard University / 2015 - 2017"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."}
              />
              <Achievement
                title={"Bachelor in Computer Engineering"}
                subtitle={"University of California / 2014 - 2015"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."}
              />
              <Achievement
                title={"International Science"}
                subtitle={"Harvard University / 2013 - 2014"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."}
              />
            </div>
          </div>
          <div className="education w-[48%]">
            <Heading tagName="h4" text="My Experience" style="text-[24px]" />
            <div className="item mt-5 border-l-[3px] border-[#f4de4e]">
              <Achievement
                title={"Sr. Font End Developer"}
                subtitle={"Apple Inc / 2020 - current"}
                description={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."}
              />
              <Achievement
                title={"Jr. Font End Developer"}
                subtitle={"Dribbble Inc / 2018 - 2020"}
                description={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."}
              />
              <Achievement
                title={"HTML Developer"}
                subtitle={"Adobe Inc / 2017 - 2018"}
                description={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."}
              />
            </div>
          </div>
        </Flex>
        <div className="skills mt-[50px]">
          <Heading tagName="h3" text="MY Skills" style="text-[28px] mb-[50px] font-bold" />
          <Flex style="justify-between flex-wrap">
            <SkillBar skillName={"web design"} parcent={"65%"} lineParcent={"50%"}/>            
            <SkillBar skillName={"Html/css"} parcent={"90%"} lineParcent={"50%"}/>            
            <SkillBar skillName={"javaScript"} parcent={"65%"} lineParcent={"50%"}/>            
            <SkillBar skillName={"React"} parcent={"60%"} lineParcent={"30%"}/>            
            <SkillBar skillName={"Anguler Js"} parcent={"60%"} lineParcent={"30%"}/>            
            <SkillBar skillName={"Bootstrap"} parcent={"70%"} lineParcent={"50%"}/>            
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
