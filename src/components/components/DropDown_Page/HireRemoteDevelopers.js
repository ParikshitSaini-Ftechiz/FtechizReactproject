import React from "react";
import styled from "styled-components";
import Main_Section from "../components/Main_Section";

const HireRemoteDevelopers = () => {
  const data = {
    nameData:"Hire Remote Developers",
  };
  const para = {
    paraData: "Hire Dedicated Software Developers or Offshore Development Team and get 360-degree development solutions. Easy and Simple process to hire skilled developers" , 
    para2:"Save Your Money & Time on Development/Maintenance/Support Cost",
  };
  const image = {
    imageData: "https://ftechiz.com/wp-content/uploads/2022/11/HireRemoteDevelopers.jpg",
  };
  const btn = {
    btnData: "REQUEST A QUOTE ",
  };
  return (
    <>
      <Wrapper>
        <Main_Section myData={data} para={para} image={image} btn={btn} />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section``;
export default HireRemoteDevelopers;
