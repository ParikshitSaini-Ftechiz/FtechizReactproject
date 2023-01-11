import React from "react";
import styled from "styled-components";

const Why_To_Choose_3col = ({title,icon}) => {
  const {title1, title2 , title3, title4 , title5, title6, title7, title8} = title;
  const {icon1, icon2 , icon3, icon4 , icon5, icon6, icon7, icon8} = icon;

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid-three-column">
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
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
padding:0 2rem;
  .container {
    background: ${({ theme }) => theme.colors.heading};
    padding: 0rem 1rem;
    border-radius: 1rem;
    cursor:pointer;
  }
  .grid {
    display: grid;
    gap:.8rem;
    margin: 5rem 2rem 0rem 2rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(4, 1fr);
  }
  .grid-two-rows {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin:1rem 0;
    .icon {
      width:auto;
    height:20rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border: 1px solid ${({ theme }) => theme.colors.color_white};
      border-radius: 1rem;
      background: ${({ theme }) => theme.colors.card_bg};
      padding: 5rem 4.2rem;
      gap:1rem;
      i {
        font-size: 3.5rem;
        color: white;
      }
      h3{
        font-size:2.2rem;
        font-weight:500;
        text-align:center;
      }
      p{
        color: ${({ theme }) => theme.colors.heading};
      }
    }
  }
  @media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }
        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}
@media (max-width:${({ theme }) => theme.media.mobile}) {
      html{
        font-size: 50%;
      }
      .grid{
        gap: 3.2rem;
      }
      .grid-three-column{
        grid-template-columns: 1fr;
      }
}
@media (max-width:${({ theme }) => theme.media.small_phone}) {
      html{
        font-size: 50%;
      }
      .grid{
        gap: 3.2rem;
      }
      .grid-three-column{
        grid-template-columns: 1fr;
      }
}
   
`;
export default Why_To_Choose_3col;
