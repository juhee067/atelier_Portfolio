import MoreBtn from "../MoreBtn";
import React from "react";
import styled from "styled-components";
import DetailTitle from "./DetailTitle";
import { FlexCenterDiv } from "src/module/styled/FlexDiv";

const IntroduceContainer = styled.div``;

const Project = styled(FlexCenterDiv)`
  border: 1px solid ${({ theme }) => theme.color.mean};
  margin-bottom: 30px;
`;

const MoreBtnBox = styled(FlexCenterDiv)`
  gap: 30px;
`;

interface ProjectProps {
  projectSrc: string;
  githubSrc: string;
  video: string;
}

export const Introduce: React.FC<ProjectProps> = ({ projectSrc, githubSrc, video }) => {
  return (
    <IntroduceContainer>
      <DetailTitle children="프로젝트 소개" />
      <Project>
        <video autoPlay loop muted playsInline width="50%">
          <source src={process.env.PUBLIC_URL + video} />
        </video>
      </Project>
      <MoreBtnBox>
        <MoreBtn content="프로젝트 결과물 바로가기" src={projectSrc} />
        <MoreBtn content="프로젝트 GitHub" src={githubSrc} />
      </MoreBtnBox>
    </IntroduceContainer>
  );
};

export default Introduce;
