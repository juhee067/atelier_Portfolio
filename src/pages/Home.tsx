import ScrollDownIndicator from "../components/scrollDown/ScrollDownIndicator";
import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  padding: 200px 0;
`;

const ContentBox = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const Var = styled.div`
  margin-bottom: 50px;
  font-size: 23px;
  font-weight: 300;
  color: ${({ theme }) => theme.color.gray};
`;

const TitleBox = styled.div`
  position: relative;
  margin-bottom: 50px;
  font-family: "Outfit";
`;

const Title = styled.div`
  width: 100%;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  font-size: 92px;
  font-weight: 500;
  text-align: center;
  &::before {
    content: "\\007B"; /* 왼쪽 중괄호 엔티티 */
    padding-right: 20px;
  }
  &::after {
    content: "\\007D"; /* 오른쪽 중괄호 엔티티 */
    padding-left: 20px;
  }
`;

const TitleBase = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.TitleBase};
  border-radius: 40px;
`;

const Mean = styled.div`
  margin-bottom: 40px;
  font-family: "Outfit";
  text-align: right;
  color: ${({ theme }) => theme.color.mean};
`;

const Dec = styled.div`
  font-family: "Outfit";
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.025rem;
  p {
    margin-bottom: 10px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <ContentBox>
        <Var>let CHOIJUHEE_PORTFORLIO =</Var>
        <TitleBox>
          <Title>Code : “Atelier”</Title>
          <TitleBase />
        </TitleBox>
        <Mean>* Atelier : 제작실, 공방</Mean>
        <Dec>
          <p>저는 코드 작성을 놀이처럼 여기며 "Atelier" 에서의 창조성을 담아냅니다.</p>
          <p>현대 프론트엔드 개발의 아름다움과 도전을 함께 나누고 싶습니다.</p>
        </Dec>
      </ContentBox>
      <ScrollDownIndicator />
    </HomeContainer>
  );
};

export default Home;
