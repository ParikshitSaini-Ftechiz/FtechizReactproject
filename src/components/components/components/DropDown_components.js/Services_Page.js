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
              const { icon, title, para } = currentData;
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
  background: ${({theme}) => theme.colors.color_grey};
  padding: 1rem;
  text-align: center;
  .content {
    h1,
    p {
      text-align: center;
      margin: 2rem 16rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
  .grid {
    display: grid;
    gap: 6rem;
    margin: 8rem 2rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  
  
`;
export default Services_Page;