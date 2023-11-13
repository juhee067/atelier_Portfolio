import React from "react";
import styled from "styled-components";

import { IconType } from "react-icons";
import { useParams } from "react-router-dom";
import { Intro } from "../components/projectDetail/Intro";
import Background from "../components/projectDetail/Background";
import { FlexColumnDiv } from "src/module/styled/FlexDiv";
import Introduce from "../components/projectDetail/Introduce";
import UseStack from "../components/projectDetail/UseStack";
import DetailDes from "../components/projectDetail/DetailDes";

const DesContainer = styled.div`
  margin-left: 80px;
  z-index: 990;
`;

const DesBox = styled(FlexColumnDiv)`
  gap: 100px;
  padding: 200px 30px;
  margin: 0 auto;
  max-width: 1000px;
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
  des: string;
  background: string;
  projectSrc: string;
  githubSrc: string;
  video: string;
  featureList: string[];
  effectList: string[];
  update: string[];
};

interface ProjectDetailProps {
  projectData: projectType[];
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectData }) => {
  let { projectNum } = useParams();

  const project = projectData.find((project) => project.text === projectNum);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

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
        <Background des={project.background} />
        <Introduce projectSrc={project.projectSrc} githubSrc={project.githubSrc} video={project.video} />
        <DetailDes
          featureList={project.featureList}
          effectList={project.effectList}
          update={project.update}
        />
        <UseStack />
      </DesBox>
    </DesContainer>
  );
};

export default ProjectDetail;
