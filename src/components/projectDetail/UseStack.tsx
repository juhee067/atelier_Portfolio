import React from "react";
import { StackType } from "src/pages/ProjectDetail";

import styled from "styled-components";
import DetailTitle from "./DetailTitle";
import Stack from "./Stack";

const UseStackContainer = styled.div``;

type UseStackProps = {
  useStack: StackType[];
};

const UseStack: React.FC<UseStackProps> = ({ useStack }) => {
  return (
    <UseStackContainer>
      <DetailTitle children="주요 기술 스택" />
      <Stack useStack={useStack} />
    </UseStackContainer>
  );
};

export default UseStack;
