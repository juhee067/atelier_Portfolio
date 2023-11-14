import React from "react";
import styled from "styled-components";

const IdModalContainer = styled.div<{ isIdModal: boolean }>`
  display: ${(props) => (props.isIdModal ? "flex" : "none")}; // flex로 변경
  align-items: center; // 수직 중앙 정렬
  justify-content: center; // 수평 중앙 정렬
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.idModalBg};
  z-index: 990;
  img {
    width: 30%;
  }
`;

const IdModal = ({ isIdModal }: { isIdModal: boolean }) => {
  return (
    <IdModalContainer isIdModal={isIdModal}>
      <img src={process.env.PUBLIC_URL + "/image/idImg.png"} />
    </IdModalContainer>
  );
};

export default IdModal;
