import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FlexRowDiv } from "src/module/styled/FlexDiv";
import styled from "styled-components";

const MoreBtnBox = styled(FlexRowDiv)`
  display: inline-flex;
  justify-content: center;
  padding: 10px 20px;
  margin-top: 20px;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.color.mainBlack};
  border-radius: 20px;
`;

interface ContentPrps {
  src: string;
  content: string;
}
const MoreBtn: React.FC<ContentPrps> = ({ src, content }) => {
  return (
    <MoreBtnBox>
      <Link to={src} target="_blank">
        {content}
      </Link>
      <BsFillArrowRightCircleFill />
    </MoreBtnBox>
  );
};

export default MoreBtn;
