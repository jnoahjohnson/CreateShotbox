import styled from "styled-components";

const DoubleImage = styled.div`
  display: grid;
  grid-template-columns: 450px 450px;
  gap: 80px;
  justify-content: center;

  img {
    border-radius: 10px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export default DoubleImage;
