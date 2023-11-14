import React from "react";
import { FlexColumnDiv } from "src/module/styled/FlexDiv";
import styled from "styled-components";

const ProjectBox = styled(FlexColumnDiv)`
  width: 100%;
  margin-top: 20px;
  &:nth-child(odd) {
    text-align: right;
    align-items: flex-end;
  }

  &:nth-child(even) {
    text-align: left;
  }
`;

const ImgBox = styled.img`
  width: 100%;
  max-width: 550px;
  height: 300px;
  margin-bottom: 50px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

const TopBox = styled(FlexColumnDiv)`
  gap: 20px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

const Period = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;

const Stack = styled.div`
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color.gray};
`;

interface ProjectProps {
  title: string;
  period: string;
  stack: string;
  src: string;
}

export const ProjectItem: React.FC<ProjectProps> = ({ title, period, stack, src }) => {
  return (
    <ProjectBox>
      <TopBox>
        <Period>{period}</Period>
        <Title>{title}</Title>
        <Stack>{stack}</Stack>
      </TopBox>
      <ImgBox src={src}></ImgBox>
    </ProjectBox>
  );
};
