import React from "react";
import Industries from "./components/Industries";
import Sofware_Development_Services from "./components/Sofware_Development_Services";
import Why_Choose_Us from "./components/Why_Choose_Us";
import Counter_Up from "./components/CounterUp";
import Tool_Tech from "./components/Tool_Tech";
import Contact_Page from "./components/Contact_Page";
import Carousel_img from "./components/Carousel_img";
import Testimonial from "./components/Testimonial";
import PremiumClient from "./components/PremiumClient";
const Home = () => {
  const contactHeading = {
    contactHeadingData: "Tell Us About Your Project",
  };
  const contactPara = {
    contactParaData:
      "Here are the reasons you can depend on Ftechiz Solutions to keep you and your business up and running:",
  };
//tool_tech para and heading

const tool_tech_heading ={
  headingData:"Tools & Tech Stack",
}
const tool_tech_para ={
  paraData:"Get what you are looking for to fulfill your software development and outsourcing needs at Ftechiz, with our expertise on all in-demand technologies & platforms.",
}
  return (
    <>
      <Carousel_img />
      <PremiumClient />
      <Industries />
      <Sofware_Development_Services />
      <Why_Choose_Us />
      <Counter_Up />
      <Tool_Tech tool_tech_heading= {tool_tech_heading} tool_tech_para={tool_tech_para}/>
      <Testimonial />
      <Contact_Page contactPara={contactPara} contactHeading={contactHeading} />
    </>
  );
};

export default Home;
