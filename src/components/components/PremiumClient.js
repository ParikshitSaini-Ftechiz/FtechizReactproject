import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const PremiumClient = () => {
  const img1 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture3-1.png";
  const img2 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture4-1.png";
  const img3 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture1-2.png";
  const img4 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture2-1.png";
  const img5 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture5-2.png";
  const img6 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture3-1.png";
  const img7 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture4-1.png";
  const img8 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture1-2.png";
  const img9 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture2-1.png";
  const img10 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture5-2.png";
  const img11 = "https://ftechiz.com/wp-content/uploads/2022/07/Picture3-1.png";
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>Our Premium Clients</h1>
            <p>In  the passing years we have establish good relationship with our clients. They appreciation gives us motivation to do better everyday.</p>
          </div>
          <div className="premium_client">
            <OwlCarousel
              className="owl-theme"
              items={3}
              autoplay="true"
              nav={true}
              dots={false}
              loop
              margin={0}
              autoplayTimeout="3000"
    
     >
            
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
              <img src={img4} />
              <img src={img5} />
              <img src={img6} />
              <img src={img7} />
              <img src={img8} />
            </OwlCarousel>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
 padding: 5rem 0 1rem 0 ;
 .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 16rem;
    }
  }
  .premium_client {
    width: auto;
    height: auto;
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.premiumClient_bg};
    margin: 5rem 2rem 1rem 2rem;
    .owl-theme{
      display: flex;
      align-items:center;
      justify-content:center; 
      ${'' /* gap:6rem; */}
    
    }
    img {
      width: 24rem;
    }
  }
  @media (max-width:${({theme}) => theme.media.small_phone}){
    .owl-theme{
    
    }
  }
`;
export default PremiumClient;
