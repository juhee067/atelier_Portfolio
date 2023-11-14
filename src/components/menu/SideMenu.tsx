import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { menuData } from "src/data/data";
import Icon from "../Icon";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import theme from "src/styles/Theme";
import { useLocation } from "react-router-dom";
import { fileData } from "../topMenu/TopMenu";

const SideMenuContainer = styled.div`
  position: relative;
  padding: 50px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.color.menuLine};
  background-color: ${({ theme }) => theme.color.menuSubBg};
`;

const MenuItem = styled.div<MenuItemProps>`
  padding: 0 24px;
  margin-bottom: 40px;
  border-left: ${({ isActive, theme }) => (isActive ? `1px solid ${theme.color.mainWhite} ` : "none")};
  pointer-events: ${({ isIdModal, dynamicFile }) => (isIdModal || dynamicFile ? "none" : null)};
`;

const CloseButton = styled.div`
  position: absolute;
  right: -25px;
  bottom: 25px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.menuLine};
  border: 1px solid ${({ theme }) => theme.color.menuSubBg};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

interface OpenType {
  isIdModal: boolean;
  isAlert: boolean;
  setIsAlert: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToProject: () => void;
  scrollToContact: () => void;
}

type dynamicFileType = {
  file: string;
  iconColor: string;
  fileIcon: JSX.Element;
  icon: boolean;
};
type MenuItemProps = {
  isActive: boolean;
  isIdModal: boolean;
  dynamicFile: dynamicFileType;
};

const SideMenu = ({
  isIdModal,
  setIsAlert,
  isOpen,
  setIsOpen,
  scrollToHome,
  scrollToAbout,
  scrollToProject,
  scrollToContact,
}: OpenType) => {
  const [countIndex, setCountIndex] = useState(0);

  const { pathname } = useLocation();
  const decodedLinkName = decodeURIComponent(pathname.split("/").pop() || ""); // 맨 마지막 부분만 추출하고 디코딩

  const dynamicFile = fileData[decodedLinkName];

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll position:", window.scrollY);
      if (0 < window.scrollY && window.scrollY <= 740) {
        setCountIndex(0); // 스크롤 위치가 500 이상이면 두 번째 메뉴를 활성화
      } else if (740 < window.scrollY && window.scrollY <= 1500) {
        setCountIndex(1); // 스크롤 위치가 500 미만이면 첫 번째 메뉴를 활성화
      } else if (1500 < window.scrollY && window.scrollY <= 4335) {
        setCountIndex(2); // 스크롤 위치가 500 미만이면 첫 번째 메뉴를 활성화
      } else if (4335 < window.scrollY) {
        setCountIndex(3); // 스크롤 위치가 500 미만이면 첫 번째 메뉴를 활성화
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

  const handleOnClick = (idx: number) => {
    setCountIndex(idx);
  };

  const handleMenuClick = (menu: string) => {
    if (menu === "home") {
      scrollToHome();
    } else if (menu === "about") {
      scrollToAbout();
    } else if (menu === "project") {
      scrollToProject();
    } else if (menu === "contact") {
      scrollToContact();
    } else if (menu === "id") {
      setIsAlert(true);
    }
  };

  return (
    <SideMenuContainer>
      <CloseButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <Icon icon={AiOutlineArrowLeft} size={30} color="#888888" margin="0" />
        ) : (
          <Icon icon={AiOutlineArrowRight} size={30} color="#888888" margin="0" />
        )}
      </CloseButton>
      {menuData.map((item, i) => {
        const isActive = i === countIndex;
        const iconColor = isActive ? theme.color.mainWhite : "#757575";
        return (
          <MenuItem key={i} isActive={isActive} isIdModal={isIdModal} dynamicFile={dynamicFile}>
            <Icon
              icon={item.icon}
              size={30}
              color={iconColor}
              margin="0"
              onClick={() => {
                handleMenuClick(item.menu);
                handleOnClick(i);
              }}
              data-menu={item.menu}
            />
          </MenuItem>
        );
      })}
    </SideMenuContainer>
  );
};

export default SideMenu;
