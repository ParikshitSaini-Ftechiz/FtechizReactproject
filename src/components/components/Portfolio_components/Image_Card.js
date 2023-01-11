import React, { useState } from "react";
import styled from "styled-components";
import { Portfolio_Data } from "./Portfolio_Data";
import SendIcon from "@mui/icons-material/Send";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
const Image_Card = ({ Menu }) => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid-three-column">
            {Menu.map((currentData) => {
              const { id, name, category, image,url1, url2} = currentData;
              return (
                <>
                  <div className="card" key={id}>
                    <img src={image} alt="image" />
            
                    <div class="  hover_section">
                    <h3>{name}</h3>
                      <a href="#" target="_blank">
                        <ZoomInIcon className="icon" />
                      </a>
                      <a href={url1} target="_blank">
                        <SendIcon className="icon"/>
                      </a>
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
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.heading};
  .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 2rem;
  }

  .grid-three-column {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .card {
    width: auto;
    position: relative;
    display: flex;
    transition: all 0.3s linear;
    border-radius: 1rem;
  }

  .card img {
    height: 30rem;
    border-radius: 1rem;
  }

  .card:hover .hover_section {
    display: block;
  }
 

  .hover_section {
    padding-top: 7px;
    padding-right: 7px;
    position: absolute;
    left: 2rem;
    top: 14rem;
    display:none;
    transform: translateY(30px);
  }

  .hover_section a {
    color: ${({ theme }) => theme.colors.color_white};
    background: ${({ theme }) => theme.colors.helper};
    border-radius:50%;
    font-size:3rem;
    padding:0 1.4rem;
    padding-bottom:.5rem;
    margin-left:1rem;
  }
  .hover_section h3 {
    color: ${({ theme }) => theme.colors.helper};
    margin:0 0 .5rem 1rem;
    font-size:3rem;
    font-weight:400;
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
export default Image_Card;
