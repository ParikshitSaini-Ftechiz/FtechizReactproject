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

  return (
    <>
      <Carousel_img />
      <PremiumClient />
      <Industries />
      <Sofware_Development_Services />
      <Why_Choose_Us />
      <Counter_Up />
      <Tool_Tech />
      <Testimonial />
      <Contact_Page contactPara={contactPara} contactHeading={contactHeading} />
    </>
  );
};

export default Home;
