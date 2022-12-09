import React from "react";
import Industries from "./components/Industries";
import Sofware_Development_Services from "./components/Sofware_Development_Services";
import Why_Choose_Us from "./components/Why_Choose_Us";
import Counter_Up from "./components/CounterUp";
import Tool_Tech from "./components/Tool_Tech";
import Contact_Page from "./components/Contact_Page";

const Home = () => {
  return (
    <>
      <Industries />
      <Sofware_Development_Services />
      <Why_Choose_Us />
      <Counter_Up />
      <Tool_Tech/>
      <Contact_Page/>
    </>
  );
};

export default Home;
