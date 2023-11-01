import React from "react";
import styled from "styled-components";
import { BsBookmark } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import Icon from "../Icon";

const SearchEngineContainer = styled.div`
  width: 340px;
  height: 100%;
  padding: 50px 30px;
  background-color: #2b2b2b;
  color: #fff;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ContentBox = styled.div`
  color: #fff;
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

const SearchEngine = () => {
  return (
    <SearchEngineContainer>
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
            <Icon icon={IoIosArrowDown} size={24} color="#fff" margin="0 10px 0 0" />
            PROJECT
          </ProjectTitle>
          <ProjectContent>
            <Project>
              <Icon icon={FaReact} size={14} color="#61DBFB" margin="0 10px 0 0" />
              독서 버킷리스트
            </Project>
            <Project>
              <Icon icon={FaReact} size={14} color="#61DBFB" margin="0 10px 0 0" />
              와인 공유 커뮤니티
            </Project>
            <Project>
              <Icon icon={FaReact} size={14} color="#61DBFB" margin="0 10px 0 0" />
              <Icon icon={TbBrandTypescript} size={14} color="#3178c6" margin="0 10px 0 0" />
              메신저 대화 분석 시각화
            </Project>
            <Project>
              <Icon icon={FaReact} size={14} color="#61DBFB" margin="0 10px 0 0" />
              <Icon icon={TbBrandTypescript} size={14} color="#3178c6" margin="0 10px 0 0" />
              메시지 전달형 자살예방
            </Project>
          </ProjectContent>
        </ProjectBox>
      </ContentBox>
    </SearchEngineContainer>
  );
};

export default SearchEngine;
