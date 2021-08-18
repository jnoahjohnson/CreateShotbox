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
`;

const ContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
`;

const PriceSection = styled.div`
  padding-top: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DescriptionSection = styled.div`
  padding-top: 2.5rem;
  font-weight: 600;
  font-size: 1.25rem;
`;

export default function BuySection() {
  return (
    <BuyStyles>
      <StaticImage src="../images/buy-product.jpg" alt="Woman using Shotbox" />
      <ContentStyles>
        <PriceSection>
          <h1>
            <span className="currency">$</span>164
          </h1>
          <button>Buy Now</button>
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
