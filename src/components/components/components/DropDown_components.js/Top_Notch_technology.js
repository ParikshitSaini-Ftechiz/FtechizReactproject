import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button";

const Top_Notch_technology = () => {
  const android = "./images/android.png";
  const rail = "./images/rails.png";
  const laravel = "./images/laravel.svg";
  const flutter = "./images/flutter.svg";
  const java = "./images/java.png";
  const node = "./images/nodejs.svg";
  const reactnative = "./images/react_native.svg";
  const ios = "./images/ios.svg";
  const angular = "./images/angular.svg";
  const js = "./images/js.png";
  const c = "./images/c-1.png";
  const python = "./images/python.png";
  const codeigniter = "./images/codeigniter.svg";
  const sql = "./images/SQLLite.png";
  const ethereum = "./images/etherium.png";
  const amazon = "./images/Amazon.png";

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-columns">
            <div className="images">
              <div className=" grid-four-columns">
                <div className=" grid-four-rows">
                  <img src={android} alt="images" />
                  <img src={rail} alt="images" />
                  <img src={laravel} alt="images" />
                  <img src={flutter} alt="images" />
                </div>
                <div className="grid-four-rows">
                  <img src={java} alt="images" />
                  <img src={node} alt="images" />
                  <img src={reactnative} alt="images" />
                  <img src={ios} alt="images" />
                </div>
                <div className="grid-four-rows">
                  <img src={angular} alt="images" />
                  <img src={js} alt="images" />
                  <img src={c} alt="images" />
                  <img src={python} alt="images" />
                </div>
                <div className="grid-four-rows">
                  <img src={codeigniter} alt="images" />
                  <img src={sql} alt="images" />
                  <img src={ethereum} alt="images" />
                  <img src={amazon} alt="images" />
                </div>
              </div>
            </div>
            <div className="content">
              <h1>Powering your projects with Top Notch Technology Experts</h1>
              <p>
                We have more than six years of experience in the service
                industry. We can serve every technology expertise, and here are
                some of the famous ones.
              </p>
              <p>
                Not sure which technology is appropriate for your project? Not
                to worry, Schedule a completely free 30-minute consultation with
                our Senior Business Development Executive.
              </p>
              <NavLink>
                <Button>Book A Call</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 4rem 0 -4rem 0;
  .grid {
    display: grid;
    gap: 9rem;
    margin: 8rem 0rem;
  }
  .grid-two-columns {
    grid-template-columns: 1fr 1fr;
  }
  .images {
    display: flex;
    align-items:center;
    justify-content:center; 
    .grid-four-coumns {
      grid-template-columns: repeat(4 1fr);
    }
    .grid-four-rows {
      display: flex;
      gap: 8rem;
      img {
        width: 8.5rem;
        height:7rem;
        margin-bottom:4.8rem;
      }
    }
  }
  .content {
    h1 {
      color: ${({ theme }) => theme.colors.heading};
      margin-bottom:2rem;
    }
    p {
      color: ${({ theme }) => theme.colors.heading};
      margin-bottom:2rem;
      text-align: justify;
    }
  }
`;
export default Top_Notch_technology;
