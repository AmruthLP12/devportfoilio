import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
        </div>
        {/* State Content */}
        <div></div>
      </div>
    </div>
  );
};

export default About;
