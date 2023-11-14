import React from "react";
import { FlexColumnDiv, FlexRowDiv } from "src/module/styled/FlexDiv";
import styled from "styled-components";

const ProjectBox = styled.div``;

const ImgBox = styled.img`
  width: 300px;
  height: 300px;
  margin-right: 30px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.color.mean};
`;

const TopBox = styled(FlexColumnDiv)``;

const MenuTitle = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.pointBlue};
`;

const ContentBox = styled(FlexRowDiv)``;

const Period = styled.div`
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 3rem;
  font-weight: 700;
`;

const Stack = styled.div`
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color.gray};
`;

const Des = styled.div`
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.paragraph};
`;

interface ProjectProps {
  title: string;
  period: string;
  stack: string;
  src: string;
  des: string;
}

export const Intro: React.FC<ProjectProps> = ({ title, period, stack, src, des }) => {
  return (
    <ProjectBox>
      <ContentBox>
        <ImgBox src={src}></ImgBox>
        <TopBox>
          <MenuTitle>WORK DETAIL</MenuTitle>
          <Period>{period}</Period>
          <Title>{title}</Title>
          <Stack>{stack}</Stack>
          <Des>{des}</Des>
        </TopBox>
      </ContentBox>
    </ProjectBox>
  );
};
