import React from "react";
import styled from "styled-components";
import DetailTitle from "./DetailTitle";
import Stack from "./Stack";

const UseStackContainer = styled.div``;

const UseStack = () => {
  return (
    <UseStackContainer>
      <DetailTitle children="주요 기술 스택" />
      <Stack />
    </UseStackContainer>
  );
};

export default UseStack;
