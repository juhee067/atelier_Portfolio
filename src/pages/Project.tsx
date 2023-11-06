import { ProjectItem } from "../components/project/ProjectItem";
import React, { forwardRef, useRef } from "react";
import { styled } from "styled-components";

const ProjectContainer = styled.div`
  padding: 200px 0;
`;
const Title = styled.div`
  margin-bottom: 50px;
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.pointBlue};
`;

const projectData = [
  {
    projectNum: "project01",
    title: "독서 버킷리스트",
    period: "2023. 02 - 2023. 07",
    stack: "React | JavaScript | Responsive Web",
    src: `${process.env.PUBLIC_URL}/image/project01.png`,
  },
  {
    projectNum: "project02",
    title: "메신저 대화 분석 시각화 웹",
    period: "2023. 04 - 2023. 08",
    stack: "React | TypeScript | Responsive Web",
    src: `${process.env.PUBLIC_URL}/image/project02.png`,
  },
  {
    projectNum: "project03",
    title: "메시지 전달형 자살예방웹사이트",
    period: "2023. 07 - 2023. 10",
    stack: "React | TypeScript | Responsive Web",
    src: `${process.env.PUBLIC_URL}/image/project03.png`,
  },
  {
    projectNum: "project04",
    title: "와인 공유 커뮤니티",
    period: "2023. 03 - 2023. 04",
    stack: "React | Javascript ",
    src: `s`,
  },
];

export const Project = forwardRef<HTMLDivElement>((props, ref: any) => {
  return (
    <ProjectContainer ref={ref}>
      <Title>Project.</Title>
      {projectData.map((project, index) => (
        <ProjectItem {...project} />
      ))}
    </ProjectContainer>
  );
});
