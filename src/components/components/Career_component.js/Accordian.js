import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Accordion = ({
  heading1,
  heading2,
  answers,
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  answer6,
  answer7,
  answer8,
  answer9,
  answer10,
  answer11,
  answer12,
  answer13,
  answer14,
  answer15,
  answer16,
  answer17,
  answer18,
  answer19,
  answer20,
  answer21,
}) => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);

  if(show){

  }
  useEffect (() =>{
return setShow(true);
  },[show])
  return (
    <>
      <Wrapper>
        <div className="question_section">
          <div className="main_div">
            <div className="questions" onClick={() => setShow(!show)}>
              <div>
                <h4>JAVA DEVELOPER</h4>
              </div>
              <div>
                {show ? (
                  <i class="fa fa-minus" aria-hidden="true"></i>
                ) : (
                  <i class="fa fa-plus" aria-hidden="true"></i>
                )}
              </div>
            </div>

            <div>
              {show && <h1>{heading1}</h1>}
              {show && (
                <p>
                  <i class="fas fa-dot-circle"></i>
                  {answers}
                  <br />
                  <i class="fas fa-dot-circle"></i>
                  {answer1}
                  <br />
                  <i class="fas fa-dot-circle"></i>
                  {answer2}
                  <br />
                  <i class="fas fa-dot-circle"></i>
                  {answer2}
                  <br /> <i class="fas fa-dot-circle"></i>
                  {answer3}
                  <br /> <i class="fas fa-dot-circle"></i>
                  {answer4}
                  <br /> <i class="fas fa-dot-circle"></i>
                  {answer5}
                  <br /> <i class="fas fa-dot-circle"></i>
                  {answer6}
                  <br />
                  <i class="fas fa-dot-circle"></i>
                  {answer7}
                </p>
              )}
              {show && <h1>{heading2}</h1>}
              {show && (
                <p>
                  <i class="fas fa-dot-circle"></i>
                  {answer8}
                  <br />
                  <i class="fas fa-dot-circle"></i>
                  {answer9}
                  <br />
                  <i class="fas fa-dot-circle"></i>
                  {answer10}
                  <br />
                  <i class="fas fa-dot-circle"></i>
                  {answer11}
                  <br /> <i class="fas fa-dot-circle"></i>
                  {answer12}
                  <br /> <i class="fas fa-dot-circle"></i>
                  {answer13}
                  <br /> <i class="fas fa-dot-circle"></i>
                  {answer14}
                </p>
              )}
              {show && (
                <p>
                  <b>Experience:</b> 2 – 5 Years
                </p>
              )}
              {show && (
                <p>
                  {" "}
                  <b>Salary:</b> No Bar for the right Candidate
                </p>
              )}
              {show && (
                <p>
                  <b> Employment Type:</b> Full Time
                </p>
              )}
              {show && (
                <p>
                  {" "}
                  <b>Location:</b> Dehradun, Uttarakhand
                </p>
              )}
            </div>

            <div className="questions" onClick={() => setShow1(!show1)}>
              <div>
                <h4>REACT.JS DEVELOPER</h4>
              </div>
              <div>
                {show1 ? (
                  <i class="fa fa-minus" aria-hidden="true"></i>
                ) : (
                  <i class="fa fa-plus" aria-hidden="true"></i>
                )}
              </div>
            </div>

            <div>
              {show1 && <h1>{heading1}</h1>}
              {show1 && (
                <p>
          
          <i class="fas fa-dot-circle"></i>
                  {answers}
                  <br />
                  <i class="fas fa-dot-circle"></i>
                  {answer2}
                  <br />
                  <i class="fas fa-dot-circle"></i>
                  {answer3}
                  <br />
                  <i class="fas fa-dot-circle"></i>
                  {answer4}
                  <br /> <i class="fas fa-dot-circle"></i>
                  {answer5}
                  <br /> <i class="fas fa-dot-circle"></i>
                  {answer7}

                </p>
              )}
              {show1 && <h1>{heading2}</h1>}
              {show1 && (
                <p> <i class="fas fa-dot-circle"></i>
                {answers}
                <br />
                <i class="fas fa-dot-circle"></i>
                {answer1}
                <br />
                <i class="fas fa-dot-circle"></i>
                {answer2}
                <br />
                <i class="fas fa-dot-circle"></i>
                {answer3}
                <br /> <i class="fas fa-dot-circle"></i>
                {answer4}
                <br /> <i class="fas fa-dot-circle"></i>
                {answer5}
                <br /> <i class="fas fa-dot-circle"></i>
                {answer7}                </p>
              )}
              {show1 && (
                <p>
                  <b>Experience:</b> 2 – 5 Years
                </p>
              )}
              {show1 && (
                <p>
                  {" "}
                  <b>Salary:</b> No Bar for the right Candidate
                </p>
              )}
              {show1 && (
                <p>
                  <b> Employment Type:</b> Full Time
                </p>
              )}
              {show1 && (
                <p>
                  {" "}
                  <b>Location:</b> Dehradun, Uttarakhand
                </p>
              )}
            </div>
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
        border-radius: 0rem;
        display: flex;
        margin-bottom: 0.5rem;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        background: ${({ theme }) => theme.colors.services_card_bg};
        color: ${({ theme }) => theme.colors.color_white};
        cursor: pointer;

        i {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 2rem;
          color: ${({ theme }) => theme.colors.color_white};
          .fas {
            font-size: 1rem;
          }
        }
      }
      h1 {
        color: ${({ theme }) => theme.colors.heading};
        font-size: 1.7rem;
        margin: 2rem 0;
      }
      p {
        color: ${({ theme }) => theme.colors.heading};
        font-size: 1.5rem;
        margin-left: 1rem;
        .fas {
          font-size: 1rem;

          margin-right: 1rem;
        }
      }
      h4 {
        font-size: 1.6rem;
      }
    }
  }
`;
export default Accordion;
