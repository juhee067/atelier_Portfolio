import React from "react";
import styled from "styled-components";
import File from "./File";
import { PiBracketsAngle } from "react-icons/pi";
import { ImFilePicture } from "react-icons/im";

const MenuContainer = styled.div`
  position: fixed;
  margin-left: 81px;
  display: flex;
  width: 100vw;
  height: 50px;
  background-color: ${({ theme }) => theme.color.menuBg};
  z-index: 980;
`;

interface ModalType {
  isIdModal: boolean;
  setIsIdModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopMenu = ({ isIdModal, setIsIdModal }: ModalType) => {
  return (
    <MenuContainer>
      <File file="index.html" iconColor="indexFile" fileIcon={<PiBracketsAngle />} />
      {isIdModal ? (
        <File
          file="ILoveCode.jpg"
          iconColor="pointBlue"
          fileIcon={<ImFilePicture />}
          icon
          setIsIdModal={setIsIdModal}
        />
      ) : null}
    </MenuContainer>
  );
};

export default TopMenu;
