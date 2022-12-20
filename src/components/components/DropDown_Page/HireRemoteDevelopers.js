import React from "react";
import Main_Section_DropDown from "../components/DropDown_components.js/Main_Section_DropDown";
import Industries_We_Serve from '../components/DropDown_components.js/Industries_We_Serve';

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
    //industries we serve//
    const industries_para={
      paraData_serve:"Throughout these years, we have delivered thousands of projects and gathered experience from almost every industry around the globe, and we are capable enough of providing to hire dedicated java developers on a large scale as per your need.",
    }
  return (
   <>
   <Main_Section_DropDown myData={data} para={para} image={image} btn={btn}/>
   <Industries_We_Serve industries_para={industries_para}/>
    </>
  );
};

export default HireRemoteDevelopers;
