import React from "react";
import Pulse from "react-reveal/Pulse";
import styled from "styled-components";
import Logo from "../images/ShotboxWhiteLogo.png";
import Product from "../images/shotboxProduct.png";

const HeroStyles = styled.div`
  background: linear-gradient(180deg, #41a9a9 0%, #368787 100%);
  width: 100%;
  height: 650px;
  /* display: flex;
  flex-direction: row;
  align-items: center; */

  color: white;

  padding: 2rem;

  .logo {
    position: absolute;
    top: 25px;
    width: 250px;
    left: 50%;
    margin-left: -125px;
  }

  .product-image {
    margin-top: 60px;
  }

  .main-text {
    /* max-width: 60%; */
    font-size: 3.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  button {
    color: black;
    background: white;
    font-weight: 800;
    font-size: 1.5rem;
    border-radius: 100px;
    box-shadow: var(--defaultShadow);
    padding: 0.8rem 3.5rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 90px;
  }

  .hero-content-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    max-width: 1400px;
    margin: 0 auto;
  }

  .amazing {
    font-weight: 800;
  }

  .amazing > div {
    display: inline;
  }
`;

export const ContentStyles = styled.div`
  padding: var(--defaultPadding, 10px);
  width: 100%;
  max-width: 1270px;
  background: blue;
`;

const Hero = () => {
  return (
    <HeroStyles>
      <div class="hero-content-container">
        <img src={Logo} alt="Shotbox" class="logo" />
        <div class="content">
          <h1 class="main-text">
            Create{" "}
            <span className="amazing">
              <Pulse cascade>amazing</Pulse>
            </span>{" "}
            photos with the Shotbox{" "}
          </h1>

          <button>Buy Now</button>
        </div>
        <img src={Product} alt="Shotbox Product" class="product-image" />
      </div>
    </HeroStyles>
  );
};

export default Hero;
