import React from "react";
import DropDown_MainSection from "../components/DropDown_MainSection";

const HireRemoteDevelopers = () => {
  const data = {
    nameData: "Hire Remote Developers",
  };
  const para = {
    paraData:
      "Hire Dedicated Software Developers or Offshore Development Team and get 360-degree development solutions. Easy and Simple process to hire skilled developers",
    para2: "Save Your Money & Time on Development/Maintenance/Support Cost",
  };
  const image = {
    imageData:
      "https://ftechiz.com/wp-content/uploads/2022/11/HireRemoteDevelopers.jpg",
  };
  const btn = {
    btnData: "REQUEST A QUOTE ",
  };
  return (
    <>
      <DropDown_MainSection myData={data} para={para} image={image} btn={btn} />
    </>
  );
};

export default HireRemoteDevelopers;
