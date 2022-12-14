import React from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";

import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
const MobileAppDevelopment = () => {
  const data = {
    nameData: "Mobile App Development Company",
  };
  const para = {
    paraData:
      "Ftechiz is a prominent mobile application development company for start-ups, mid and high-level organizations.  We help many Global Brands to Design and Deliver Top-Class Mobile Apps for their business, enabling Seamless User Experiences across All Modern Platforms and Devices.",
  };
  const image = {
    imageData:
      "	https://ftechiz.com/wp-content/uploads/2022/08/mobile_app_development-1.png",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData: "Why to Choose Ftechiz for Mobile App Development Services?",
  };
  const para1 = {
    paraData:
      "Being one of the best Mobile App development company in India & USA, we develop the best user-friendly, secure and cost-effective mobile applications for both iOS and Android users. At Ftechiz, you will get a pool of talented Mobile App developers for both native and cross platforms.",
    paraData2:
      "We have a strong team of qualified & experienced mobile app developers who works on both native and cross-platform mobile app development and are capable enough to transform your app idea into reality. Mobile Apps developed by us cover all the latest trending technologies, including Blockchain, Artificial Intelligence, chatbots, IoT, and more. Our ground-breaking mobile app solution will help start-ups, SMEs and enterprises in increasing their efficiency, overall ROI and their feedback has made us a top mobile app development company on the world map.",
    paraData3:
      "Our talented mobile app developers use latest cutting-edge technologies such as React Native, Flutter, iOS, Android, Kotlin, etc., to deliver secure, scalable, and user-friendly mobile application development services that meet your specific business requirements.",
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

export default MobileAppDevelopment;
