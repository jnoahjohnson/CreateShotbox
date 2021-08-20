import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import HeadShake from "react-reveal/HeadShake";

const BuyStyles = styled.div`
  width: 90%;
  margin: 0 auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  padding: 3rem;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  img {
    border-radius: 10px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 490px) {
    padding: 0.5rem;
  }
`;

const ContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  button {
    color: white;
    background: var(--primary);
    font-weight: 800;
    font-size: 1.5rem;
    border-radius: 100px;
    box-shadow: var(--defaultShadow);
    padding: 0.8rem 3.5rem;
  }

  h1 {
    font-size: 5rem;
    color: var(--primary);
    font-weight: 700;
    margin-top: 20px;
  }

  .currency {
    font-size: 3rem;
    vertical-align: text-top;
  }

  .sale {
    position: absolute;
    top: -30px;
    right: 0;
    /* transform: rotate(6deg); */
    background: #ea526f;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.55rem 0.65rem;
    box-shadow: var(--defaultShadow);
    border-radius: 5px;
    width: 330px;
    text-align: center;
  }

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
    text-align: center;

    margin-top: -20px;
    .sale {
      right: -10px;
    }
  }

  @media (max-width: 490px) {
    .sale {
      font-size: 1.75rem;
      padding: 0.25rem;
      width: auto;
      right: 0;
    }
  }

  @media (max-width: 400px) {
    .sale {
      font-size: 1rem;
    }
  }
`;

const PriceSection = styled.div`
  padding-top: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: -25px;
  }

  @media (max-width: 490px) {
    padding-top: 0;
  }
`;

const DescriptionSection = styled.div`
  padding-top: 2.5rem;
  font-weight: 600;
  font-size: 1.25rem;
`;

export default function BuySection() {
  return (
    <BuyStyles id="BuySection">
      <StaticImage src="../images/buy-product.jpg" alt="Woman using Shotbox" />
      <ContentStyles>
        <PriceSection>
          <h1>
            <span className="currency">$</span>164
          </h1>
          <div id="product-component-1629479374550"></div>
        </PriceSection>
        <DescriptionSection>
          <p>
            Includes everything you need! The Shotbox, SideShot, multiple
            backgrounds, and other bonus tools all come in a deluxe carrying
            bag.
          </p>
        </DescriptionSection>
        <HeadShake delay={1000}>
          <h2 className="sale">End of Summer Sale</h2>
        </HeadShake>
      </ContentStyles>
    </BuyStyles>
  );
}
