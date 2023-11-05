import React from "react";
import styled from "styled-components";

const Title = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.color.mean};
`;
const PortfolioText = () => {
  return <Title>Atelier</Title>;
};

export default PortfolioText;
