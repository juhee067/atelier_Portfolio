import React from "react";
import { FlexColumnDiv } from "src/module/styled/FlexDiv";
import styled from "styled-components";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

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
  cursor: pointer;
`;

const TopBox = styled(FlexColumnDiv)`
  gap: 20px;
  margin-bottom: 20px;
`;

const ProjectNum = styled.div`
  font-size: 4rem;
  font-weight: 900;
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

type projectType = {
  icon: IconType;
  color: string;
  projectNum: string;
  text: string;
  period: string;
  stack: string;
  src: string;
  isModal: boolean;
};

interface ProjectProps {
  project: projectType;
}

export const ProjectItem: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectBox>
      <TopBox>
        <ProjectNum>{project.projectNum}</ProjectNum>
        <Period>{project.period}</Period>
        <Title>{project.text}</Title>
        <Stack>{project.stack}</Stack>
      </TopBox>
      <Link to={`/projects/${project.text}`} style={{ display: "block" }}>
        <ImgBox src={project.src} />
      </Link>
    </ProjectBox>
  );
};
