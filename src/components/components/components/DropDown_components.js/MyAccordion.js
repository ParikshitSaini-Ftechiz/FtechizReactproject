import React from "react";
import { useState } from "react";
import styled from "styled-components";

const MyAccordion = ({ question, answer,answer1 ,answer2 ,answer3 ,answer4 ,answer5 ,answer6 ,answer7 }) => {
    const [show, setShow] = useState(false);
  return (
    <>
      <Wrapper>
        <div className="question_section">
          <div className="main_div">
            <div className="questions" onClick={() => setShow(!show)}>
              <div>
                <h4>{question}</h4>
              </div>
              <div>
               {show ?  <i class="fa fa-angle-down" aria-hidden="true"></i> : <i aria-hidden="true" class="fa-toggle fas fa-angle-right"></i>}
              </div>
            </div>
        
            {
                show &&  <p>{answer}
                {answer1}{answer2}{answer3}{answer4}{answer5}{answer6}{answer7}</p>
              
            }
        
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .question_section {
    .main_div {
      margin: 1rem 0;
      .questions {
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background: ${({ theme }) => theme.colors.light_color};
        cursor:pointer;
        &:hover {
          background: ${({ theme }) => theme.colors.services_card_bg};
          color: ${({ theme }) => theme.colors.color_white};
          i {
            color: ${({ theme }) => theme.colors.color_white};
          }
        }

        i {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 2rem;
          color: ${({ theme }) => theme.colors.heading};
        }
      }
      p {
        color: ${({ theme }) => theme.colors.heading};
        font-size:1.5rem;
        margin-left:1rem;
      }
      h4{
        font-size:1.6rem;
      }
    }
  }
`;
export default MyAccordion;
