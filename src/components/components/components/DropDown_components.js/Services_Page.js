import React,{useState} from 'react';
import Card from './Card';
import styled from "styled-components"
import { Card_Data } from './Card_Data';

const Services_Page = () => {
 
  const [state, setState] = useState(Card_Data);
  console.log(state);
  return (
    <>
        <Wrapper>
        <div className="container">
          <div className="grid grid-three-column">
            {state.map((currentData) => {
              const { icon, title, para} = currentData;
              return (
                <>
                <div>
                <Card title={title} para={para} icon={icon}/>
                </div>
                </>
              );
            })}
        
          </div>
        </div>
      </Wrapper>
   </>
  );
}
const Wrapper = styled.section`
  padding: 1rem;
  text-align: center;
  .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 0rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export default Services_Page;