import React,{useState} from 'react'
import styled from 'styled-components'
import Card from '../Card';
import {Hire_Top_Software_In_Steps_Data} from "../CardData";

const Hire_Top_Software_In_Steps = () => {
    const [state, setstate] = useState(Hire_Top_Software_In_Steps_Data);
    const para = "Below is the simple process that we follow while offering services to our clients.";
    const heading = "Hire Top Software Developers in 5 easy steps";

  return (
   <>
         <Wrapper>
        <div class="container">
          <div className="content">
            <h1>{heading}</h1>
            <p>
             {para}
            </p>
          </div>
          <div className='grid grid-three-column'>
           {
            state.map((currentData, id) => {
                const{icon, description ,title} =currentData;
                return (
                    <>
                    <div className="card">
          <div className="card_body">
            <div className="star_icon">
              <div className='icon'>{icon}</div>
            </div>
            <div className="card_description">{description}</div>
            <div className="grid_two_rows">
              <div>
                <h3 className="card_title">{title}</h3>
              </div>
              
            </div>
          </div>
        </div>
                    </>
                )
            })
           }
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 6rem 0 0 0 ;
 
  .content {
    h1,
    p {
      text-align: center;
      margin: 0rem 3rem;
    }
  }
  .card {
    width: 35rem;
    height: auto;
    border: none;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius:.5rem;
    padding: 2rem 4rem;
    background: ${({ theme }) => theme.colors.component_bg};
    .card_body {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 2rem;
   
        img {
          width: 15rem;
        }
      }
      .card_description {
        font-size: 1.5rem;
        text-align: justify;
        opacity: 0.6;
        margin-top:-3rem;
      }
      .grid_two_rows {
        display: flex;
        align-items: center;
        h3 {
        
          font-size: 1.6rem;
          font-weight: 600;
        }
      }
      
    }
  
`;

export default Hire_Top_Software_In_Steps