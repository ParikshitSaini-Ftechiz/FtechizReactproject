import React, { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import { CardData } from "./components/CardData";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
  const [state, setState] = useState(CardData);
  const options = {
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    loop: true,

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <Wrapper>
        <div class="container">
          <div className="content">
            <h1>Testimonials</h1>
            <p>
              We are grateful for our clients’ trust in us, and we take great
              pride in delivering quality services that exceed their
              expectations. Here is what some of them have to say about us.
            </p>
          </div>
          <div className="card_detail">
          <OwlCarousel className="owl-theme" {...options} >
            
            {state.map((currentData, index) => {
              const { description, title } = currentData;
              return (
                <>
                  <div key={index}>
                    <Card description={description} title={title} />
                  </div>
                </>
              );
            })}
          </OwlCarousel>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  border: none;
  .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 6rem 0rem 6rem;
  }
  .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 16rem;
    }
  }
  .card_detail{
    margin:8rem 0rem 0 0;
    padding: 4rem 0;
  }

  @media (max-width:${({ theme }) => theme.media.tab}) {
    .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 6rem;
    }
  }
}
@media (max-width:${({ theme }) => theme.media.mobile}) {
  .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 2rem;
    }
  }
}
@media (max-width:${({ theme }) => theme.media.small_phone}) {
  .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 2rem;
    }
  }
}
`;

export default Testimonial;
