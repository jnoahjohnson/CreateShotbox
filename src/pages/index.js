import * as React from "react";
import { ContentStyles } from "../styles/ContentStyles";
import FloatingText from "../components/FloatingText";
import Hero from "../components/Hero";
import { Spacer } from "../components/Spacer";
import { StaticImage } from "gatsby-plugin-image";
import { ImageStyles } from "../styles/ImageStyles";
import styled from "styled-components";
import DoubleImage from "../styles/DoubleImage";
import CardGrid from "../components/CardGrid";
import { CardData } from "../data/FeatureCards";

const BlueHeader = styled.h1`
  color: var(--primary, blue);
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;
`;

const TestimonialBlock = styled.p`
  background: var(--primary);
  padding: 1.25rem;
  font-size: 1.8rem;
  color: white;
  box-shadow: var(--defaultShadow);
  border-radius: 10px;
  text-align: center;
`;

// markup
const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Spacer />
      <ContentStyles>
        <FloatingText>
          Express your creativity with the Shotbox, a collapsible photo light
          studio that is designed especially for your smartphone.
        </FloatingText>
      </ContentStyles>
      <Spacer />

      <ImageStyles>
        <StaticImage
          src="../images/PhotoImage.png"
          alt="Woman taking picture of jewlery"
          placeholder="blurred"
        />
      </ImageStyles>
      <Spacer />
      <BlueHeader>think inside the box.</BlueHeader>
      <Spacer />
      <ContentStyles>
        <DoubleImage>
          <StaticImage
            src="../images/zoomOut.png"
            alt="Shotbox with a plant inside"
            placeholder="blurred"
          />
          <StaticImage
            src="../images/zoomIn.png"
            alt="Plant with brick background"
            placeholder="blurred"
          />
        </DoubleImage>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <CardGrid cards={CardData} />
        <Spacer />
        <Spacer />
        <Spacer />
        <TwoColumn>
          <ImageStyles>
            <StaticImage
              src="../images/tablePicture.png"
              alt="Man taking picture of drawing"
              placeholder="blurred"
            />
          </ImageStyles>
          <TestimonialBlock>
            “I just wanted to say that your product went above and beyond my
            expectations. It works perfect. The portability is just awesome and
            my etsy shop pictures have dramatically improved. Worth every
            penny!”
          </TestimonialBlock>
        </TwoColumn>
      </ContentStyles>
    </main>
  );
};

export default IndexPage;
