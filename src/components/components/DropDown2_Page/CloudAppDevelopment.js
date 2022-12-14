import React from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
const CloudAppDevelopment = () => {
  const data = {
    nameData: "Leading Cloud Application Development Company",
  };
  const para = {
    paraData:
      "Control the power of cloud computing: Ftechiz Solutions creates secure, scalable digital solutions that drive your bottom line and support optimized customer experiences as per you budget and business requirements. Contact us to create cloud applications that run in the cloud and may leverage cloud features and services offered by cloud vendors.",
  };
  const image = {
    imageData:
      "	https://ftechiz.com/wp-content/uploads/2022/08/cloud-computing.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData: "What Sets Us Apart As Cloud Application Development Company?",
  };
  const para1 = {
    paraData:
      "Being unique is our main quality! Ftechiz Solutions believe in the things that give us an edge over our competitors. We are prominent Software and Mobile App Development Company serving customers with end-to-end support across the globe. Our Idealization, feasibility assessment of the entire software development process stands us one level up then our competitors. ",
    paraData2:
      "We start from the scratch and stick with you through the entire process of designing, developing, testing and managing your cloud-based app. Our unique custom cloud application development services include innovative cloud strategies based on the best leading providers for your business — whether you require enterprise cloud adoption, CloudOps or any other cloud application.",
    paraData3:
      "We use latest cutting-edge technologies and the best of all private, public and hybrid cloud services for business-driving results. Our experienced team of cloud-based app developers have all the skills required for the job. Plus, you will get on-demand and self-service IT Support and maintenance for your cloud-based apps, including services such as efficiency audits, SLA management and overview of all critical elements for your cloud-based application.",
    paraData4:
      "We use latest cutting-edge technologies and the best of all private, public and hybrid cloud services for business-driving results. Our experienced team of cloud-based app developers have all the skills required for the job. Plus, you will get on-demand and self-service IT Support and maintenance for your cloud-based apps, including services such as efficiency audits, SLA management and overview of all critical elements for your cloud-based application.",
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
export default CloudAppDevelopment;
