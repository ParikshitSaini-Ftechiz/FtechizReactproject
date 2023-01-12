import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const PremiumClient = () => {
  const style = {
    marginLeft: "auto",
    marginRight: "auto",
  };
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 1000,
    loop: false,

    responsive: {
      0: {
        items: 1,
        center: true,
      },
      400: {
        items: 1,
        center: true,
      },
      600: {
        items: 2,
        center: true,
      },
      700: {
        items: 3,
        center: true,
      },
      1000: {
        items: 3,
        center: true,
      },
    },
  };
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
            <p>
              In the passing years we have establish good relationship with our
              clients. They appreciation gives us motivation to do better
              everyday.
            </p>
          </div>
          <div className="premium_client" style={style}>
            <OwlCarousel className="owl-theme" {...options} style={style}>
              <div className="item">
                <img src={img1} style={style} />
              </div>
              <div className="item">
                <img src={img2} style={style} />
              </div>
              <div className="item">
                <img src={img3} style={style} />
              </div>
              <div className="item">
                <img src={img4} style={style} />
              </div>
              <div className="item">
                <img src={img5} style={style} />
              </div>
              <div className="item">
                <img src={img6} style={style} />
              </div>
              <div className="item">
                <img src={img7} style={style} />
              </div>
              <div className="item">
                <img src={img8} style={style} />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0 1rem 0;
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
    margin: auto;
    display: flex;

    .owl-theme .item {
      img {
        width: 22rem;
        padding-top: 2rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      max-width: 130rem;
      padding: 0 3.2rem;
    }
    .grid-four-column {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding: 3rem 0 1rem 0;

    html {
      font-size: 60%;
    }
    .container {
      max-width: 130rem;
      padding: 0 3.2rem;
    }

    .content {
      h1{
        text-align: center;
        margin: 1rem;
      }
      p {
        text-align: justify;
        margin: 0rem 2rem 2rem 2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 60%;
    }

    
    .content {
      h1{
        text-align: center;
        margin: 1rem;
      }
      p {
        text-align: justify;
        margin:0rem 2rem 2rem 2rem;
      }
    }
  }

`;
export default PremiumClient;
