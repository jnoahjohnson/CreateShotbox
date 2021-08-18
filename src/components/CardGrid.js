import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const CardStyles = styled.div`
  text-align: center;

  h1 {
    color: var(--primary, blue);
    font-weight: bold;
    font-size: 2rem;
  }
`;

const Card = ({ card }) => {
  return (
    <CardStyles>
      {card.image}
      <div style={{ height: 20 }} />
      <h1>{card.title}</h1>
      <p>{card.text}</p>
    </CardStyles>
  );
};

const CardGridStyles = styled.div`
  display: grid;
  grid-template-columns: 350px 350px 350px;
  gap: 50px;
  justify-content: center;
`;

const CardGrid = ({ cards }) => {
  return (
    <CardGridStyles>
      {cards.map((card, index) => (
        <Fade top delay={300 * index}>
          <Card card={card} />
        </Fade>
      ))}
    </CardGridStyles>
  );
};

export default CardGrid;
