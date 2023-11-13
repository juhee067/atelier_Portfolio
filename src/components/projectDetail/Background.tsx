import React from "react";
import styled from "styled-components";
import DetailTitle from "./DetailTitle";

const UserUxContainer = styled.div``;

const Des = styled.div`
  font-size: 1.7rem;
  font-family: 300;
  line-height: 1.5;
  letter-spacing: 0.01rem;
  color: ${({ theme }) => theme.color.idModalBg};
`;

const Background = ({ des }: { des: string }) => {
  return (
    <UserUxContainer>
      <DetailTitle children="프로젝트 기획 배경" />
      <Des>{des}</Des>
    </UserUxContainer>
  );
};

export default Background;
