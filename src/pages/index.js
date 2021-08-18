import * as React from "react";
import { ContentStyles } from "../styles/ContentStyles";
import FloatingText from "../components/FloatingText";
import Hero from "../components/Hero";
import ScrollAnimation from "react-animate-on-scroll";
import { Spacer } from "../components/Spacer";
import { StaticImage } from "gatsby-plugin-image";
import { ImageStyles } from "../styles/ImageStyles";
import styled from "styled-components";
import DoubleImage from "../styles/DoubleImage";
import CardGrid from "../components/CardGrid";
import { CardData } from "../data/FeatureCards";
import ExamplesSection from "../components/ExamplesSection";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Flip from "react-reveal/Flip";
import BuySection from "../components/BuySection";

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
  gap: 10px;
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

const FooterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4.5rem 0 2rem 0;
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
      <Fade>
        <ImageStyles>
          <StaticImage
            src="../images/PhotoImage.png"
            alt="Woman taking picture of jewlery"
            placeholder="blurred"
          />
        </ImageStyles>
      </Fade>

      <Spacer />
      <BlueHeader>
        <Jump cascade>think inside the box.</Jump>
      </BlueHeader>
      <Spacer />
      <ContentStyles>
        <DoubleImage>
          <Fade left>
            <StaticImage
              src="../images/zoomOut.png"
              alt="Shotbox with a plant inside"
              placeholder="blurred"
            />
          </Fade>
          <Fade right>
            <StaticImage
              src="../images/zoomIn.png"
              alt="Plant with brick background"
              placeholder="blurred"
            />
          </Fade>
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
          <Fade left>
            <ImageStyles>
              <StaticImage
                src="../images/tablePicture.png"
                alt="Man taking picture of drawing"
                placeholder="blurred"
              />
            </ImageStyles>
          </Fade>
          <Fade right>
            <TestimonialBlock>
              “I just wanted to say that your product went above and beyond my
              expectations. It works perfect. The portability is just awesome
              and my etsy shop pictures have dramatically improved. Worth every
              penny!”
            </TestimonialBlock>
          </Fade>
        </TwoColumn>

        <ExamplesSection />
        <BlueHeader>Ready to create something amazing?</BlueHeader>
        <Spacer />
        <BuySection />
        <FooterSection>
          <StaticImage
            src="../images/shotbox-blue.png"
            alt="Shotbox"
            width={200}
          />
        </FooterSection>
      </ContentStyles>
    </main>
  );
};

export default IndexPage;
