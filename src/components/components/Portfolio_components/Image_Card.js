import React, { useState } from "react";
import styled from "styled-components";
import { Portfolio_Data } from "./Portfolio_Data";
import SendIcon from "@mui/icons-material/Send";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from '@mui/icons-material/Close';

const Image_Card = ({ Menu }) => {
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImage = (image) => {
    setTempImg(image);
    setModel(true);
    console.log(image);
  };

  return (
    <>
      <Wrapper>
        <div className={model ? "model open" : "model"}>
          <img src={tempImg} />
          <CloseIcon onClick={()=>setModel(false)}/>
        </div>
        <div className="container">
          <div className="grid grid-three-column">
            {Menu.map((currentData,index) => {
              return (
                <>
                  <div className="card" key={index}  onClick={() => getImage(currentData.image)}>
                    <img src={currentData.image} alt="image" />

                    <div class="hover_section">
                      <div>
                        <h3>{currentData.name}</h3>
                      </div>
                      <div>
                        <a className="icons">
                          <ZoomInIcon
                            className="icon"
                           
                            style={{
                              fontSize: "3.2rem",
                              marginLeft: ".3rem",
                              marginBottom: ".2rem",
                            }}
                          />
                        </a>
                        <a
                          href={currentData.url1}
                          target="_blank"
                          className="icons"
                        >
                          <SendIcon
                            className="icon"
                            style={{
                              fontSize: "2.8rem",
                              marginLeft: ".7rem",
                              marginBottom: ".4rem",
                            }}
                          />
                        </a>
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
    overflow: hidden;
    display: flex;
    transition: all 0.3s linear;
    border-radius: 1rem;
  }

  .card img {
    height: 30rem;
    border-radius: 1rem;
  }

  .hover_section {
    position: absolute;
    ${"" /* background:  rgb(27,27,27,0.5); */}
    width: 100%;
    height: 10rem;
    bottom: 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    transition: all 0.5s linear;

    .icons {
      color: ${({ theme }) => theme.colors.color_white};
      background: ${({ theme }) => theme.colors.helper};
      border-radius: 50%;
      padding: 1rem 0.5rem;
      margin-left: 1rem;
      opacity: 0;
    }
    h3 {
      color: ${({ theme }) => theme.colors.color_white};
      margin-bottom: 2rem;
      font-size: 3rem;
      font-weight: 400;
      opacity: 0;
    }
  }
  .card:hover {
    cursor: pointer;
  }
  .card:hover .hover_section {
    height: 30rem;
    background: rgb(27, 27, 27, 0.5);
  }
  .card:hover .icons {
    visibility: visible;
    opacity: 1;
  }
  .card:hover h3 {
    visibility: visible;
    opacity: 1;
  }
  ${"" /* model */}

  .model {
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.90);
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
    transform: scale(0);
  }
  .model.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  .model img {
    width: auto;
    max-width:100%;
    height:auto;
    max-height:100%;
    display:block;
    line-height:0;
    padding:10rem 0 2rem 0 ;
    margin:0 auto; 
  }
  .model.open svg{
    position:fixed;
    top:10rem;
    right:5rem;
    width:3rem;
    height:3rem;
    padding:.5rem;
    background:rgba(0,0,0,0.4);
    color:#ffffff;
    cursor:pointer;
  }
  ${"" /* model */}

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      padding: 0 3.2rem;
    }
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 50%;
    }
    .grid {
      gap: 3.2rem;
    }
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 50%;
    }
    .grid {
      gap: 3.2rem;
    }
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Image_Card;
