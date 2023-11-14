import React, { forwardRef } from "react";
import { FlexColumnDiv, FlexRowDiv } from "src/module/styled/FlexDiv";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MoreBtn from "../components/MoreBtn";

const AboutContainer = styled.div``;

const AboutMe = styled(FlexRowDiv)`
  padding: 70px 20px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.bottomLine};
  margin-bottom: 30px;
`;

const AboutImg = styled.img`
  width: 370px;
  height: 370px;
  border-radius: 15%;
`;

const ContentBox = styled(FlexColumnDiv)`
  justify-content: space-between;
`;

const Intro = styled.div``;

const IntroduceTitle = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.pointBlue};
`;

const Channel = styled.div`
  font-size: 1.7rem;
  > :first-child {
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 5px;
  }
`;

const Title = styled.div`
  margin-bottom: 40px;
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.pointBlue};
`;

const Content = styled.div`
  font-size: 20px;
  font-weight: 400;

  p {
    margin-bottom: 10px;
  }
`;

const Introduce = styled.div``;

const DesBox = styled(FlexRowDiv)`
  justify-content: space-between;
`;

const DesTitle = styled.div`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 500;
`;

const Des = styled.div`
  font-weight: 300;
  letter-spacing: 0.025rem;
  color: ${({ theme }) => theme.color.gray};
  p {
    margin-bottom: 10px;
  }
`;

export const About = forwardRef<HTMLDivElement>((props, ref: any) => {
  return (
    <AboutContainer ref={ref}>
      <AboutMe>
        <AboutImg src={process.env.PUBLIC_URL + "/image/profile.png"}></AboutImg>
        <ContentBox>
          <Intro>
            <Title>ABOUT ME.</Title>
            <Content>
              <p>어디서 "똑"소리 나지 않나요?</p>
              <p>안녕하세요! 프론트엔드 개발자 최주희입니다.</p>
            </Content>
            {/* <MoreBtn
              content="자기소개 더보기"
              src="https://www.notion.so/772ca0c9ecaa47b6977cc0d596f01298?pvs=4"
            /> */}
          </Intro>
          <Channel>
            <p>Channel</p>
            <p>
              <Link to="https://woody-j.tistory.com/" target="_blank">
                Blog. https://woody-j.tistory.com
              </Link>
            </p>
            <p>
              <Link to="https://github.com/juhee067" target="_blank">
                GitHub. https://github.com/juhee067
              </Link>
            </p>
          </Channel>
        </ContentBox>
      </AboutMe>
      <Introduce>
        <IntroduceTitle>INTRODUCE.</IntroduceTitle>
        <DesBox>
          <ContentBox>
            <DesTitle>사용자의 입맛을 맞춥니다</DesTitle>
            <Des>
              <p>주식 데이터 정보를 시각적으로 분석할 수 있도록</p>
              <p>벡터 그래픽으로 제작한 경험을 살려 웹 기반</p>
              <p>정보시각화 프로젝트를 수행한 경험이 있습니다.</p>
              <p>디자인과 프론트엔드 개발을 융합하여 사용자들에게 직관적이고</p>
              <p>효과적인 정보를 제공하는 데 관심이 많습니다.</p>
            </Des>
          </ContentBox>
          <ContentBox>
            <DesTitle>너, 나, 그리고 우리</DesTitle>
            <Des>
              <p>주식 데이터 정보를 시각적으로 분석할 수 있도록</p>
              <p>벡터 그래픽으로 제작한 경험을 살려 웹 기반</p>
              <p>정보시각화 프로젝트를 수행한 경험이 있습니다.</p>
              <p>디자인과 프론트엔드 개발을 융합하여 사용자들에게 직관적이고</p>
              <p>효과적인 정보를 제공하는 데 관심이 많습니다.</p>
            </Des>
          </ContentBox>
        </DesBox>
      </Introduce>
    </AboutContainer>
  );
});
