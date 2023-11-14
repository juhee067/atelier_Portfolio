import React from "react";
import styled from "styled-components";
import { Intro } from "./Intro";

import { IconType } from "react-icons";

const DesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 80px;
  z-index: 990;
`;

const DesBox = styled.div`
  padding: 200px 30px;
  margin: 0 auto;
  max-width: 1000px;
  background-color: ${({ theme }) => theme.color.mean};
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
  des: string[];
};

interface ProjectProps {
  project: projectType;
}

export const Des: React.FC<ProjectProps> = ({ project }) => {
  return (
    <DesContainer>
      <DesBox>
        <Intro
          title={project.text}
          period={project.period}
          stack={project.stack}
          src={project.src}
          des={project.des}
        />
      </DesBox>
    </DesContainer>
  );
};

export default Des;
