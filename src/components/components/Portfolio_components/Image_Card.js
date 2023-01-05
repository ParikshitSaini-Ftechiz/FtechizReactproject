import React, { useState } from "react";
import styled from "styled-components";
import Portfolio_Data from "./Portfolio_Data";
const Image_Card = ({ Menu }) => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid-three-column">
            {Menu.map((currentData) => {
              const { id, name, category, image, description } = currentData;
              return (
                <>
                  <div className="card-container" key={id}>
                    <div className="card">
                      <div className="card-body">
                        <span className="card-number">{id}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description">{description}</span>
                        <div className="card-read">Read</div>
                      </div>
                      <img src={image} alt="image" />
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
.grid {
  display: grid;
  gap: 9rem;
  margin:8rem 6rem;
}

.grid-three-column {
  grid-template-columns: 1fr 1fr 1fr;
}`;
export default Image_Card;
