import React from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
import Services_Page from "../components/DropDown_components.js/Services_Page";


const WebsiteDevelopment = () => {
  const data = {
    nameData: "Website Development Company",
  };
  const para = {
    paraData:
      "Ftechiz is a leading web development company, offering all kinds of custom-built websites, web portals, and web applications. We use latest cutting-edge technologies, tools, advanced frameworks, and proven strategies to make sure that our solutions are future-ready and conformable. We provide end-to-end web development services, styled exclusively to solve your complex business challenges.",
  };
  const image = {
    imageData:
      "https://ftechiz.com/wp-content/uploads/2022/08/lee-campbell-DtDlVpy-vvQ-unsplash-2.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData: "Why to Choose Ftechiz for Web Development Services?",
  };
  const para1 = {
    paraData:
      "Digitalization of a business remains incomplete without a web presence. In today’s world the majority of digital users are on mobile, the world is on the web. Our team of highly skilled web development experts help you get in front of the entire digital world with a platform that is intuitive, scalable and future-ready. We achieve this feat through our custom web development services.",
    paraData2:
      "Ftechiz Solutions Pvt. Ltd. is a leading web development company specialized in creating secure, robust and custom websites and web applications with high scalability and security. We have the right combination of expert web developers, skilled web designers, testers, experienced managers and creative content writers, making us a unique one-stop solution for several businesses across globe. Our main focus is on eye-catching and interactive graphic design and intuitive operation while developing the websites.",
    paraData3:
      "With multiple years of experience in the industry, we help many businesses to go digital, from start-ups to large-scale organizations, build cutting-edge B2B & B2C websites and web applications for diverse industries. Ftechiz is a leading company, serving exceptional web design and development services globally. Our professional and cost-effective web development services have helped us become a trust-worthy organization between our clients. Being the leading web development company, Ftechiz Solutions Pvt. Ltd. is known for delivering the high-quality web solutions and serving modern business requirements at a reasonable cost globally.",
    paraData4:
      "Below are the few reasons why we can be your best technology partner when thinking of building websites and applications:-",
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
// card//

  return (
    <>
      <Main_Section myData={data} para={para} image={image} btn={btn} />
      <Para_Heading heading={heading} para1={para1} />
      <Why_To_Choose icon={icon} title={title} />
<Services_Page/>
    </>
  );
};

export default WebsiteDevelopment;
