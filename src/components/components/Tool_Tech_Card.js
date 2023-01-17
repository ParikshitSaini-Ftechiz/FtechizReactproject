import React from "react";
import styled from "styled-components";

const Tool_Tech_Card = ({ list, setList }) => {
  return (
    <>
      <Wrapper>
        <div className="grid grid-four-column">
          {list.map((currentData) => {
            
            return (
              <>
                <div className=" tool_icons_column">{currentData.url}</div>
              </>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .grid {
    display: grid;
    gap: 6rem;
    margin: 0rem 3rem 0rem 3rem;
  }

  .grid-four-column {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .tool_icons_column {
    display: flex;
  }
  img {
    width: 10rem;
    height: 10rem;
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid {
      gap: 3.2rem;
    }
    .grid-four-column {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    img {
      width: 8rem;
      height: 8rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 3.2rem;
    }
    .grid-four-column {
      grid-template-columns: 1fr;
    }
    img {
      width: 15rem;
      height: 15rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    .grid {
      gap: 3.2rem;
    }
    .grid-four-column {
      grid-template-columns: 1fr;
    }
    img {
      width: 13rem;
      height: 12rem;
    }
  }
`;
export default Tool_Tech_Card;
