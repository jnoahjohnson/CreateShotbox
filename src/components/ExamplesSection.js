import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 350px 350px 350px;
  grid-template-rows: 350px 350px;
  gap: 1rem;
  justify-content: center;

  .grid-item {
    box-shadow: var(--defaultShadow);
  }
`;

const ExampleGrid = () => {
  return (
    <Fade cascade>
      <GridStyles>
        <StaticImage
          src="../images/example-cards.png"
          alt="Cards"
          className="grid-item"
        />
        <StaticImage
          src="../images/example-dice.jpg"
          alt="dice"
          className="grid-item"
        />
        <StaticImage
          src="../images/example-elephants.png"
          alt="elephants"
          className="grid-item"
        />
        <StaticImage
          src="../images/example-food.jpg"
          alt="food"
          className="grid-item"
        />
        <StaticImage
          src="../images/example-food-top.png"
          alt="food"
          className="grid-item"
        />
        <StaticImage
          src="../images/example-journal.jpg"
          alt="journal"
          className="grid-item"
        />
      </GridStyles>
    </Fade>
  );
};

const ExamplesSectionStyles = styled.div`
  padding: 3.5rem;

  h1 {
    text-align: center;
    color: var(--primary);
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
  }
`;

const ExamplesSection = () => {
  return (
    <ExamplesSectionStyles>
      <h1>
        <Fade top cascade>
          The Possibilities Are Endless
        </Fade>
      </h1>

      <ExampleGrid />
    </ExamplesSectionStyles>
  );
};

export default ExamplesSection;
