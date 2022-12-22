import React,{useState} from 'react';
import Card from './Card';
import Para_Heading from "./Para_Heading";
import {hireblockchain, hirefullStack ,hirejava ,hiremobile} from "./Card_Data"
import styled from 'styled-components';
import Extra_div from "./Extra_div"
export const Development_Services_blockchain = () =>
{
   const [state, setState] = useState(hireblockchain);
    const heading = {
        headingData : "Our Blockchain Development Services",
    }
    const para1 = {
        paraData : " ",
    }
  return (
    <>
        <Para_Heading heading={heading} para1={para1}/>

        <Wrapper>
        <div className="container">
          <div className="grid grid-three-column">
            {state.map((currentData) => {
              const { icon1, title1, para1 } = currentData;
              return (
                <>
                  <div>
                    <Card title={title1} para={para1} icon={icon1} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Extra_div/>
        
      </Wrapper>
    </>
  )
}
export const Development_Services_fullstack = () =>
{
   const [state, setState] = useState(hirefullStack);
  const heading = {
      headingData : "Our Full Stack Development Services",
  }
  const para1 = {
      paraData : " ",
  }
return (
  <>
      <Para_Heading heading={heading} para1={para1}/>
      <Wrapper>
        <div className="container">
          <div className="grid grid-three-column">
            {state.map((currentData) => {
              const { icon1, title1, para1 } = currentData;
              return (
                <>
                  <div>
                    <Card title={title1} para={para1} icon={icon1} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Extra_div/>

      </Wrapper>
  </>
)
}

export const Development_Services_java = () => {
  const [state, setState] = useState(hirejava);
  const heading = {
      headingData : "Our Java Development Services",
  }
  const para1 = {
      paraData : "Ftechiz offers the entire Java development services, from consulting to the deployment of the product. Not only this, but we also value our customers, hence we offer free post-launch product support services for a specific time frame which is enough to observe the results. As one of the best Java software development companies, we offer a wide range of services including: ",
  }
return (
  <>
      <Para_Heading heading={heading} para1={para1}/>
      <Wrapper>
        <div className="container">
          <div className="grid grid-three-column">
            {state.map((currentData) => {
              const { icon1, title1, para1 } = currentData;
              return (
                <>
                  <div>
                    <Card title={title1} para={para1} icon={icon1} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Extra_div/>

      </Wrapper>
  </>
)
}

export const Development_Services_mobile = () => {
const [state, setState] = useState(hiremobile);
  const heading = {
      headingData : "Our Mobile App Development Services",
  }
  const para1 = {
      paraData : "",
  }
return (
  <>
      <Para_Heading heading={heading} para1={para1}/>
      <Wrapper>
        <div className="container">
          <div className="grid grid-three-column">
            {state.map((currentData) => {
              const { icon1, title1, para1 } = currentData;
              return (
                <>
                  <div>
                    <Card title={title1} para={para1} icon={icon1} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Extra_div/>

      </Wrapper>
  </>
)
}
const Wrapper = styled.section`
  .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 2rem ;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
`;

