import React from "react";
import styled from "styled-components";

const Title = styled.div`
  margin-bottom: 50px;
  font-weight: 500;
  font-size: 2.7rem;
`;

const DetailTitle = ({ children }: { children: string }) => {
  return <Title>{children}</Title>;
};

export default DetailTitle;
