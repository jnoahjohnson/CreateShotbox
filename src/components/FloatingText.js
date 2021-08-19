import React from "react";
import styled from "styled-components";

const FloatingText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  max-width: 55%;

  @media (max-width: 640px) {
    max-width: 100%;
    font-size: 1.75rem;
  }
`;

export default FloatingText;
