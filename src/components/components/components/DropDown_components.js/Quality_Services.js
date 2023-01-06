import React, { useState } from "react";
import styled from "styled-components";
import { Quality_Services_Data } from "../../ChooseUs_Card_Detail";

const Quality_Services = () => {
  const [state, setState] = useState(Quality_Services_Data);
  return (
    <>
      <Wrapper>
        <div class="container">
        <div className="content">
        <h1>Hire Remote Developers for High Productivity & Quality Services</h1>
        <p>You can hire remote developers from us who are proactively take responsibility for project development services for on-demand Product Design, Development, Product Launches and Post Launch Support on their own. Their client-centric approach, in-depth knowledge & hands-on experience of different industries can handle every essential part of the technical process for high performance, speed, advanced Security, & scalability.  You can hire dedicated software developers to consistently produce the targeted results in your given time. And integrate your potent idea with tailor-fit SDLC setups, dedicated ideal resources, UI/UX strategies, QA methods & exhaustive consulting at each stage for end-to-end remote development.</p>
        </div>
          <div class="grid ">
            {state.map((currentData) => {
              const { icon, title, para } = currentData;
              return (
                <>
                  <div class="card">
                    <div class=" grid-two-column">
                      <div className="card_icon">
                        <div className="icon">{icon}</div>
                      </div>
                      <div class="card-body">
                        <h3 class="card-title">{title}</h3>
                        <p class="card-text" style={{ textAlign: "justify" }}>
                          {para}
                        </p>
                      </div>
                    </div>
                  </div>
             
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 3rem 0;

  .grid {
    display: grid;
    gap: 3rem;
    margin: 8rem 2rem;
  }
  .content{
    margin-top:3rem;
    text-align:center;
    h1{
        color: ${({ theme }) => theme.colors.heading}; 
    }
    p{
        text-align:justify;
        color: ${({ theme }) => theme.colors.heading}; 
    }
  }
  .card {
    width: 100%;
    display: flex;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.component_bg};
    padding: 1rem 1.5rem;

    h3 {
      margin: 1rem 0rem;
      color:${({ theme }) => theme.colors.color_white};
    }
    
    .grid-two-column {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      grid-template-columns: 1fr 1fr;
      .card_icon {
        width: 15rem;
        height: 10rem;
        background: ${({ theme }) => theme.colors.color_white};
        border-radius: 50%;
        display: inline-block;
        padding: 3rem 2.8rem;

      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      padding: 0 3.2rem;
    }
    html {
      font-size: 60%;
    }
    .grid_two_column {
      grid-template-columns: 1fr 1fr;
    }
    .card {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.component_bg};
    padding: 2rem;
    border-radius: 1rem;
    align-items:center;
    justify-content:center;
    h3 {
      text-align:center;
      margin: 1rem 0rem;
    }
    .grid-two-column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      grid-template-columns:  1fr;
      .card_icon {
        width: 10rem;
        height: 10rem;
        background: ${({ theme }) => theme.colors.color_white};
        border-radius: 50%;
        display: flex;
        padding: 3rem 2.8rem;
        margin:auto;
      }
    }
  }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 60%;
    }
    .grid {
      gap: 3.2rem;
    }
    .grid_two_column {
      grid-template-columns: 1fr;
    }
    .card {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.component_bg};
    padding:  2rem;
    border-radius: 1rem;
    align-items:center;
    justify-content:center;
    h3 {
      text-align:center;
      margin: 1rem 0rem;
      font-size:2.6rem;
      font-weight:500;
    }
    .grid-two-column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      grid-template-columns:  1fr;
      .card_icon {
        width: 10rem;
        height: 10rem;
        background: ${({ theme }) => theme.colors.color_white};
        border-radius: 50%;
        display: flex;
        padding: 3rem 2.8rem;
        margin:auto;
      }
    }
  }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 60%;
    }
    .grid {
      gap: 3.2rem;
    }
    .grid_two_column {
      grid-template-columns: 1fr;
    }
    .card {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.component_bg};
    padding: 2rem;
    border-radius: 1rem;
    align-items:center;
    justify-content:center;
    h3 {
      text-align:center;
      margin: 2rem 0rem;
      font-weight:500;
    }
    .grid-two-column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      grid-template-columns:  1fr;
      .card_icon {
        width: 10rem;
        height: 10rem;
        background: ${({ theme }) => theme.colors.color_white};
        border-radius: 50%;
        display: flex;
        padding: 3rem 2.8rem;
        margin:auto;
      }
    }
  }
  }
`;
export default Quality_Services;
 