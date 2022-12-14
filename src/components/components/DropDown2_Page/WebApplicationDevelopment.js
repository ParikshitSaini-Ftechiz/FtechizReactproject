import React from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";

import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
const WebApplicationDevelopment = () => {
  const data = {
    nameData: "Leading Web Application Development Company",
  };
  const para = {
    paraData:
      "Ftechiz magnifies the digital transformation of growing businesses by leveraging its strong portfolio in developing custom web applications using latest technology and tools. We are the top-rated web application development company building feature-rich web applications that are easy to scale and maintain.",
  };
  const image = {
    imageData:
      "https://ftechiz.com/wp-content/uploads/2022/08/lee-campbell-DtDlVpy-vvQ-unsplash-1.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData:
      "Why to Choose Ftechiz for Web Application Development Services?",
  };
  const para1 = {
    paraData:
      "We are the leading web application development company that purely focuses on building fully functional, robust, efficient and scalable web applications. We build custom web apps using the right technology and tools that easily integrate with your business objectives and help you achieve maximum growth. Our end goal is to build high-quality quality web applications for you that maximize resource utilization at a low cost.",
    paraData2:
      "We have a pool of most talented developers, designers, testers, project managers, & quality engineers that use the advanced web app development techniques to build customized, high-performing, enterprise-grade, and result-driven web applications for your business. Our development team has successfully delivered over 50 projects of all sizes. At Ftechiz, we have transformed various industries across the globe leveraging powerful and newest technologies.",
    paraData3:
      "We have a technically strong web application development team that has successfully delivered 50+ custom web app development projects ranging from web-based apps, e-commerce portals, CMS, B2B & B2C applications, Blockchain Wallets, Education Portals, and more. We are the experts of all new tools & technologies and provide the best web application development services.",
    paraData4:
      " Below are some of the reasons why you can choose Ftechiz for Web Application Development services",
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

export default WebApplicationDevelopment;
