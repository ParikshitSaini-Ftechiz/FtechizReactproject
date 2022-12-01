import React from 'react'
import Main_Section from './components/Main_Section'

const Career = () => {
  const data = {
    nameData : "We Seek Innovators, Disrupters and Dreamers",
  };
  const para = {
    paraData : "Are You Smart, Creative and Driven? We're hiring... Explore a World of Big Opportunities",
  };
  const image = {
    imageData : "./images/career.jpg",
  }
  const btn = {
    btnData : "Let's talk",
  }
  return (
    <>
      {/* {myName} */}
      <Main_Section myData={data} para={para} image={image} btn={btn}/>
    </>
  );
}

export default Career