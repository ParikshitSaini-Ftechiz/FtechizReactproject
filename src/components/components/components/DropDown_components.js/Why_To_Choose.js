import React from "react";
import styled from "styled-components";

const Why_To_Choose = ({title,icon}) => {
  const {title1, title2 , title3, title4 , title5, title6, title7, title8} = title;
  const {icon1, icon2 , icon3, icon4 , icon5, icon6, icon7, icon8} = icon;

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid-four-column">
          <div className="grid-two-rows">
              <div className="icon">
               <p>{icon1}</p>
                <h3>{title1}</h3>
              </div>
              <div className="icon">
               <p>{icon2}</p>
                <h3>{title2}</h3>
              </div>
            </div>
            <div className="grid-two-rows">
              <div className="icon">
               <p>{icon3}</p>
                <h3>{title3}</h3>
              </div>
              <div className="icon">
               <p>{icon4}</p>
                <h3>{title4}</h3>
              </div>
            </div>
            <div className="grid-two-rows">
              <div className="icon">
               <p>{icon5}</p>
                <h3>{title5}</h3>
              </div>
              <div className="icon">
               <p>{icon6}</p>
                <h3>{title6}</h3>
              </div>
            </div>
            <div className="grid-two-rows">
              <div className="icon">
               <p>{icon7}</p>
                <h3>{title7}</h3>
              </div>
              <div className="icon">
               <p>{icon8}</p>
                <h3>{title8}</h3>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .container {
    background: ${({ theme }) => theme.colors.heading};
    padding: 0rem 1rem;
    border-radius: 1rem;
  }
  .grid {
    display: grid;
    gap:.8rem;
    margin: 5rem 0rem 0rem 0rem;
  }
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }
  .grid-two-rows {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin:1rem 0;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.color_white};
      border-radius: 1rem;
      background: ${({ theme }) => theme.colors.card_bg};
      padding: 4rem 3.5rem;
      gap:1rem;
      i {
        font-size: 4rem;
        color: white;
      }
      h3{
        font-size:2.6rem;
        text-align:center;
      }
      p{
        color: ${({ theme }) => theme.colors.heading};
      }
    }
  }
`;
export default Why_To_Choose;
