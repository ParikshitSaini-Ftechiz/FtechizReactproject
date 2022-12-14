import React from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";

import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
const WebsiteDesigning = () => {
  const data = {
    nameData: "Leading Website Designing Company",
  };
  const para = {
    paraData:
      "Ftechiz is a leading web development company, offering all kinds of custom-built websites, web portals, and web applications. We use latest cutting-edge technologies, tools, advanced frameworks, and proven strategies to make sure that our solutions are future-ready and conformable. We provide end-to-end web development services, styled exclusively to solve your complex business challenges.",
  };
  const image = {
    imageData:
      "	https://ftechiz.com/wp-content/uploads/2022/08/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData: "Why to Choose Ftechiz for Website Designing Services?",
  };
  const para1 = {
    paraData:
      "Your company is more than just an attractive picture on the screen.",
    paraData2:
      "At Ftechiz, the prominent web design company, we believe that the online presence of your business is a mirror image of you, your product, and the tone that you set for your brand’s story. We develops eye-catching web designs and push the envelope further than those static three column layouts to give an all-immersive digital brand experience that resonates with your users. We are a team of high skilled and creative techies with years of expertise in creating web designs that enlighten, delight, and inspire your viewers.",
    paraData3: "In short- we bring your business to life.",
    paraData4:
      "Our designers, who are experts at creating stunning web design, dive deep into your industry and product aesthetics to make sure that your website represents everything that you and your business stand for. We analyse and optimise customer experience by making a well-structured responsive web design to make your brand a money minting machine and improve conversion.",
    paraData5:
      "We are a website design company that can craft elegant one-page websites to thousand page websites, design-driven informational websites for potential and active customers and e-commerce websites to assist online purchase through your website. We can also redesign your existing website’s old-style menus or update layouts and make sure a clean, attractive flow throughout the website.",
    paraData6:
      "We have helped many international clients with website design services, content creation, development and designing. Below are the few reasons why you can choose Ftechiz for website designing services-",
  };

  // icons //
  const icon = {
    icon1: "",
    icon2: "",
    icon3: "",
    icon4: "",
    icon5: "",
    icon6: "",
    icon7: "",
    icon8: "",
  };
  const title = {
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    title7: "",
    title8: "",
  };
  return (
    <>
      <Main_Section myData={data} para={para} image={image} btn={btn} />
      <Para_Heading heading={heading} para1={para1} />
      <Why_To_Choose icon={icon} title={title} />
    </>
  );
};

export default WebsiteDesigning;
