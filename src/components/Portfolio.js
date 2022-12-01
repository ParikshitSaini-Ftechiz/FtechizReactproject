import React from 'react'
import Main_Section from './components/Main_Section'

const Portfolio = () => {
  const data = {
    nameData : "Portfolio",
  };
  const para = {
    paraData : "We worked hard to make it up to here. Displaying some of the best of our work below. ",
  };
  const image = {
    imageData : "./images/portfolio.jpg",
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

export default Portfolio