import React, { forwardRef } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FlexRowDiv } from "src/module/styled/FlexDiv";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 100px 0 120px;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.color.bottomLine};
`;

const Title = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.pointBlue};
`;

const SubTitle = styled.div`
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 400;
`;

const Email = styled.div`
  margin-bottom: 70px;
  font-size: 70px;
  font-weight: 600;
  letter-spacing: 0.125rem;
`;

const Pr = styled.div`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.025rem;
  p {
    margin-bottom: 10px;
  }
  :nth-child(2) {
    margin-bottom: 50px;
  }
`;

const MoreBtn = styled(FlexRowDiv)`
  display: inline-flex;
  justify-content: center;
  padding: 10px 20px;
  margin-top: 40px;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.color.mainBlack};
  border-radius: 20px;
`;

export const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <AboutContainer ref={ref}>
      <Title>CONTACT </Title>
      <SubTitle>오늘도 즐겁게 야근할 사람을 찾고 계신가요? </SubTitle>
      <Email> woodyj9988@gmail.com </Email>
      <Pr>
        <p> 오늘 다르고 내일 다른 실력을 갖춘 개발자를 찾고 계신가요?</p>
        <p> 창의적이고 열정적인 프론트엔드 개발자를 찾고 계시다면, 언제든지 연락해 주세요.</p>
        <p> 또한, 어떤 주제든 함께 나누고 싶습니다. </p>
        <p>
          포트폴리오나 개발 이외의 주제로도 궁금한 점이나 이야기를 나누고 싶을 때, 편안하게 연락해 주세요
        </p>
      </Pr>
      <MoreBtn>
        <span> 메일보내기</span>
        <BsFillArrowRightCircleFill />
      </MoreBtn>
    </AboutContainer>
  );
});
