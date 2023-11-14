import { ProjectItem } from "../components/project/ProjectItem";
import React, { forwardRef } from "react";
import { styled } from "styled-components";
import { projectData } from "src/data/data";
import { Link } from "react-router-dom";

const ProjectContainer = styled.div`
  padding: 150px 0;
`;

const Title = styled.div`
  margin-bottom: 50px;
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.pointBlue};
`;

export const Project = forwardRef<HTMLDivElement>((props, ref: any) => {
  return (
    <ProjectContainer ref={ref}>
      <Title>Project.</Title>
      {projectData.map((project, index) => (
        <Link to={`/projects/${project.text}`}>
          <ProjectItem key={index} project={project} />
        </Link>
      ))}
    </ProjectContainer>
  );
});
