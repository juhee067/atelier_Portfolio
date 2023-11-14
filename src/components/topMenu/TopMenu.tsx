import React from "react";
import styled from "styled-components";
import File from "./File";
import { PiBracketsAngle } from "react-icons/pi";
import { ImFilePicture } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const MenuContainer = styled.div`
  position: fixed;
  margin-left: 80px;
  display: flex;
  width: 100vw;
  height: 50px;
  background-color: ${({ theme }) => theme.color.menuBg};
  z-index: 980;
`;

interface ModalType {
  isIdModal: boolean;
  setIsIdModal: React.Dispatch<React.SetStateAction<boolean>>;
  project: any;
}

export const fileData: {
  [key: string]: { file: string; iconColor: string; fileIcon: JSX.Element; icon: boolean };
} = {
  "독서 버킷리스트": {
    file: "독서 버킷리스트.jsx",
    iconColor: "reactColor",
    fileIcon: <FaReact />,
    icon: true,
  },
  "메신저 대화 분석 시각화 웹": {
    file: "메신저 대화 분석 시각화 웹.tsx",
    iconColor: "reactColor",
    fileIcon: <FaReact />,
    icon: true,
  },
  "메시지 전달형 자살예방웹사이트": {
    file: "메시지 전달형 자살예방웹사이트.tsx",
    iconColor: "reactColor",
    fileIcon: <FaReact />,
    icon: true,
  },
  "와인 공유 커뮤니티": {
    file: "와인 공유 커뮤니티.jsx",
    iconColor: "reactColor",
    fileIcon: <FaReact />,
    icon: true,
  },
};

const TopMenu = ({ isIdModal, setIsIdModal, project }: ModalType) => {
  const { pathname } = useLocation();
  const decodedLinkName = decodeURIComponent(pathname.split("/").pop() || ""); // 맨 마지막 부분만 추출하고 디코딩

  const dynamicFile = fileData[decodedLinkName];

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
      {dynamicFile && <File {...dynamicFile} />}
    </MenuContainer>
  );
};

export default TopMenu;
