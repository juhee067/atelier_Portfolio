import React from "react";
import styled from "styled-components";
import { BsBookmark } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Icon from "../Icon";
import { projectData } from "src/data/data";

const SearchEngineContainer = styled.div<SearchEngineContainerProps>`
  position: absolute;
  transform: translateX(${(props) => (props.isOpen ? 0 : "-150%")}); // 왼쪽에서 오른쪽으로 이동
  width: 340px;
  height: 100%;
  margin-left: 80px;
  padding: 50px 30px;
  background-color: ${({ theme }) => theme.color.menuBg};
  color: ${({ theme }) => theme.color.mainWhite};
  z-index: 990;
  transition: transform 0.3s ease; // 0.3초 동안 부드럽게 나타나고 사라짐
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ContentBox = styled.div`
  color: ${({ theme }) => theme.color.mainWhite};
  letter-spacing: 0.125rem;
`;

const FrontEnd = styled.div`
  margin-bottom: 20px;
  font-size: 1.7rem;
`;

const ProjectBox = styled.div``;

const ProjectTitle = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 20px;
  font-size: 3rem;
  font-weight: 900;
`;

const ProjectContent = styled.div`
  margin-left: 45px;
`;

const Project = styled.div`
  margin-bottom: 20px;
  font-size: 1.8rem;
`;

interface SearchEngineContainerProps {
  isOpen: boolean;
}

interface OpenType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchEngine = ({ isOpen, setIsOpen }: OpenType) => {
  return (
    <SearchEngineContainer isOpen={isOpen}>
      <Title>
        <span>탐색기</span>
        <BsBookmark />
      </Title>
      <ContentBox>
        <FrontEnd>
          <Icon icon={IoIosArrowDown} size={14} color="#fff" margin="0 10px 0 0" />
          2023 FRONTEND
        </FrontEnd>
        <ProjectBox>
          <ProjectTitle>
            <Icon icon={IoIosArrowDown} size={14} color="#fff" margin="0 10px 0 0" />
            PROJECT
          </ProjectTitle>
          <ProjectContent>
            {projectData.map((item, index) => (
              <Project key={index}>
                <Icon icon={item.icon} size={14} color={item.color} margin="0 10px 0 0" />
                {item.text}
              </Project>
            ))}
          </ProjectContent>
        </ProjectBox>
      </ContentBox>
    </SearchEngineContainer>
  );
};

export default SearchEngine;
