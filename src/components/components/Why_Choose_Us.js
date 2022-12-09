import React, { useState } from "react";
import styled from "styled-components";
import { ChooseUs_Card_Detail } from "./ChooseUs_Card_Detail";

const Why_Choose_Us = () => {
  const [state, setState] = useState(ChooseUs_Card_Detail);
  return (
    <>
      <Wrapper>
        <div class="container">
        <div className="content">
        <h1>Why Choose Us</h1>
        <p>Here are the reasons you can depend on Ftechiz Solutions to keep you and your business up and running:</p>
        </div>
          <div class="grid grid_two_column">
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
  background: ${({ theme }) => theme.colors.bg};
  .grid {
    display: grid;
    gap: 3rem;
    margin: 8rem 2rem;
  }
  .content{
    margin-top:3rem;
    text-align:center;
  }
  .card {
    width: 58rem;
    display: flex;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.card_bg};
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    h3 {
      margin: 1rem 0rem;
    }
    .grid-two-column {
      display: flex;
      flex-direction: row;
      gap: 6rem;
      grid-template-columns: 0.5fr 1fr;
      .card_icon {
        width: 10rem;
        height: 10rem;
        background: ${({ theme }) => theme.colors.helper};
        border-radius: 50%;
        display: inline-block;
        padding: 3rem 2.8rem;
        margin: auto;
        margin-bottom: 8rem;
      }
    }
  }
`;
export default Why_Choose_Us;
