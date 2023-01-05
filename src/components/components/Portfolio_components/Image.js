import React,{useState} from "react";
import styled from "styled-components";

const Image = ({ img = [{ url: "" }] }) => {

  const [image , setImage] = useState(img[0]);
  return (
    <>
      <Wrapper>
        <div className="product_images">
          <div className="">
            {img.map((currentData, index) => {
              return (
                <figure>
                  <img
                    src={currentData.url}
                    alt={currentData.filename}
                    key={index}
                    onClick={() =>setImage(currentData)}
                  />
                </figure>
              );
            })}
          </div>

          {/* //2nd column// */}

          <div className="product_bgimg">
            <img src={image.url} alt={image.filename} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .product_images {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .grid {
      display: grid;
      gap: 1rem;
      margin: 0;
    }
    .grid-four-column {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      align-items:center;
    }
    figure {
      img {
        width: 13rem;
        height: 9rem;
      }
    }
    .product_bgimg {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default Image;