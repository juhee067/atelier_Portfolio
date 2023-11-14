import React from "react";
import styled from "styled-components";
import DetailTitle from "./DetailTitle";

const DetailTitleContainer = styled.div``;

const DetailSubTitle = styled.div`
  margin-bottom: 30px;
  padding-left: 20px;
  font-size: 2rem;
`;

const Ul = styled.ul`
  font-size: 1.7rem;
  margin-bottom: 50px;
  padding-left: 60px;
`;

const Li = styled.li`
  margin-bottom: 10px;
  list-style: square;
`;

interface ProjectProps {
  featureList: string[];
  effectList: string[];
  update: string[];
}

const DetailDes: React.FC<ProjectProps> = ({ featureList, effectList, update }) => {
  return (
    <DetailTitleContainer>
      <DetailTitle children="프로젝트 상세소개" />
      <DetailSubTitle>핵심기능</DetailSubTitle>{" "}
      <Ul>
        {featureList.map((item, index) => {
          return <Li key={index}> {item}</Li>;
        })}
      </Ul>
      <DetailSubTitle>기대효과</DetailSubTitle>
      <Ul>
        {effectList.map((item, index) => {
          return <Li key={index}> {item}</Li>;
        })}
      </Ul>
      <DetailSubTitle>추후 업데이트 예정</DetailSubTitle>
      <Ul>
        {update.map((item, index) => {
          return <Li key={index}> {item}</Li>;
        })}
      </Ul>
    </DetailTitleContainer>
  );
};

export default DetailDes;
