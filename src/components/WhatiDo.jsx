import React from "react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Container from "./Container";
import Flex from "./Flex";
// react icons
import { FaPalette , FaPencilRuler , FaPaintBrush  } from "react-icons/fa";
import { CiMonitor , CiImageOn  } from "react-icons/ci";
import { GoMegaphone } from "react-icons/go";

const WhatiDo = () => {
  return (
    <section className=" bg-[#f8f9fa] py-16">
      <Container>
        <SectionHeading
          alignment="center"
          paragraph="what I Do?"
          heading="How I can Help You Next Project"
        />
        <Flex style="justify-between flex-wrap mt-7 mt-[70px]">
          <ServiceCard
            cardStyle="w-[30%]"
            iconname={<FaPalette  className="text-6xl text-[#f5df4e] mx-auto" />}
            headingText="graphic design"
            paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
          <ServiceCard
            cardStyle="w-[30%]"
            iconname={<CiMonitor className="text-6xl text-[#f5df4e] mx-auto" />}
            headingText="web design"
            paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
          <ServiceCard
            cardStyle="w-[30%]"
            iconname={<FaPencilRuler  className="text-6xl text-[#f5df4e] mx-auto" />}
            headingText="UI/UX Design"
            paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
          <ServiceCard
            cardStyle="w-[30%]"
            iconname={<FaPaintBrush  className="text-6xl text-[#f5df4e] mx-auto" />}
            headingText="App Design & Develop"
            paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
          <ServiceCard
            cardStyle="w-[30%]"
            iconname={<CiImageOn  className="text-6xl text-[#f5df4e] mx-auto" />}
            headingText="Business Analysis"
            paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
          <ServiceCard
            cardStyle="w-[30%]"
            iconname={<GoMegaphone className="text-6xl text-[#f5df4e] mx-auto" />}
            headingText="SEO Marketing"
            paragraphText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."
          />
        </Flex>
      </Container>
    </section>
  );
};

export default WhatiDo;
