import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import { FlexRowDiv } from "src/module/styled/FlexDiv";

const FileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.menuSubBg};
  font-size: 1.7rem;
  border-right: 1px solid ${({ theme }) => theme.color.menuLine};
`;

const FileName = styled(FlexRowDiv)<{ closeicon?: boolean }>`
  width: 100%;
  justify-content: ${({ closeicon }) => (closeicon ? "space-between" : "")};
  align-items: center;
  color: ${({ theme }) => theme.color.mainWhite};
  font-style: italic;
`;

const Icon = styled.div<{ iconColor: string }>`
  color: ${({ theme, iconColor }) => theme.color[iconColor]};
  font-weight: 900;
  margin-right: 10px;
`;

const TitleBox = styled(FlexRowDiv)`
  font-size: 1.5rem;
`;

const IconBox = styled.div`
  cursor: pointer;
`;

interface FileType {
  file: string;
  icon?: boolean;
  fileIcon: React.ReactNode;
  setIsIdModal?: React.Dispatch<React.SetStateAction<boolean>>;
  iconColor: string;
}

const File = ({ file, icon, fileIcon, setIsIdModal, iconColor }: FileType) => {
  return (
    <FileContainer>
      <FileName closeicon={icon}>
        <TitleBox>
          <Icon iconColor={iconColor}>{fileIcon}</Icon>
          {file}
        </TitleBox>
        {icon && setIsIdModal ? (
          <IconBox onClick={() => setIsIdModal((prev) => !prev)}>
            <AiOutlineClose />
          </IconBox>
        ) : null}
      </FileName>
    </FileContainer>
  );
};

export default File;
