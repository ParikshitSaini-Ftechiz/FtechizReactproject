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
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      max-width: 130rem;
      padding: 0 3.2rem;
    }
    .grid {
    display: grid;
    gap: 1rem;
    margin: 8rem 1.5rem;
  }
    .grid-three-column {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .content {
    h1{
      text-align: center;
      margin: 1rem 6rem;
      color: ${({ theme }) => theme.colors.heading};
    }
    p {
      text-align: justify;
      margin: 2rem 6rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 60%;
    }
    .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 2rem;
  }
    .grid-three-column {
      grid-template-columns: 1fr;
    }
    
     .content {
    h1{
      text-align: justify;
    }
    p {
      text-align: center;
      margin: 2rem 2rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  }

  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 60%;
    }
    .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 2rem;
  }
    .grid-three-column {
      grid-template-columns: 1fr;
    }
    
     .content {
    h1{
      {
      text-align: center;
      margin: 2rem 2rem;
      color: ${({ theme }) => theme.colors.heading};
    }
    }
    p {
      text-align: justify;
      margin: 2rem 2rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
 
  }
`;
export default Services_Page;