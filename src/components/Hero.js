import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
  display: flex;
  align-items: center;
  position: relative;

  .logo {
    position: absolute;
    top: 25px;
    width: 250px;
    left: 50%;
    margin-left: -125px;
  }

  .product-image {
    margin-top: 175px;
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
    margin-bottom: 0px;
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

  @media (max-width: 1200px) {
    .content {
      flex-grow: 2;
      margin-bottom: 0;
    }

    .product-image {
      flex-grow: 1;
      width: 100%;
      margin-top: 80px;
    }

    height: 500px;
  }

  @media (max-width: 850px) {
    height: auto;
    padding-bottom: 0;

    .hero-content-container {
      padding-top: 65px;
      flex-direction: column;
    }

    .product-image {
      max-width: 90%;
      width: 400px;
      margin: 0;
      margin-left: 40%;
      margin-top: -100px;
    }
  }

  @media (max-width: 640px) {
    .content {
      text-align: center;
      align-items: center;
    }

    .main-text {
      font-size: 2.5rem;
    }

    .product-image {
      margin: 0;
    }
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
          <AnchorLink href="#BuySection">
            <button>Buy Now</button>
          </AnchorLink>
        </div>
        <img src={Product} alt="Shotbox Product" class="product-image" />
      </div>
    </HeroStyles>
  );
};

export default Hero;
