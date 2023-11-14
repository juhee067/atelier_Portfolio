import React from "react";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const ScrollIndicatorContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.mainBlack};
  font-size: 24px;
  cursor: pointer;
  animation: ${bounceAnimation} 2s linear infinite;
`;

const ScrollDownIndicator = () => {
  return (
    <ScrollIndicatorContainer>
      <p>Scroll to read more</p>
      <Arrow>↓</Arrow>
    </ScrollIndicatorContainer>
  );
};

export default ScrollDownIndicator;
