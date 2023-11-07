import Icon from "../Icon";
import React from "react";
import { FlexRowDiv } from "src/module/styled/FlexDiv";
import styled from "styled-components";
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";

const AlertContainer = styled.div`
  padding: 20px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: ${({ theme }) => theme.color.alertModal};
  color: ${({ theme }) => theme.color.mainWhite};
  border-radius: 10px;
  filter: drop-shadow(2px 2px 3px ${({ theme }) => theme.color.mean});
`;

const NoticeBox = styled(FlexRowDiv)`
  align-items: center;
  margin-bottom: 20px;
`;
const Notice = styled.div`
  margin: 0 60px 0 10px;
`;

const BtnBox = styled(FlexRowDiv)`
  gap: 20px;
  justify-content: flex-end;
`;

const Button = styled.div`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.alertModalPointBlue};
  border-radius: 5px;
`;

const Alert = () => {
  return (
    <AlertContainer>
      <NoticeBox>
        <Icon icon={AiOutlineInfoCircle} color="#0078D4" />
        <Notice>누르시면 안되는데.. 그래도 확인하시겠어요?</Notice>
        <Icon icon={AiOutlineClose} color="#585858" />
      </NoticeBox>

      <BtnBox>
        {/* 컴포 만드셈 */}
        <Button>Yes</Button>
        <Button>No</Button>
      </BtnBox>
    </AlertContainer>
  );
};

export default Alert;
