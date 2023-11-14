import React from "react";
import { FlexRowCenterDiv } from "src/module/styled/FlexDiv";
import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 30px 0 80px;
`;

const ContentBox = styled(FlexRowCenterDiv)`
  color: ${({ theme }) => theme.color.gray};
  justify-content: space-between;
`;

const Mark = styled.div`
  font-size: 2rem;
  text-align: right;

  :first-child {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.mainBlack};
  }

  :last-child {
    font-weight: 300;
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentBox>
        <p> Thank you for reading it.</p>
        <Mark>
          <p>Code : “ Atelier ”</p>
          <p>(C) 2023 JHCHOI.net</p>
        </Mark>
      </ContentBox>
    </FooterContainer>
  );
};

export default Footer;
