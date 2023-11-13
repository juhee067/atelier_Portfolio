import React, { useState } from "react";
import styled from "styled-components";

import { menuData } from "src/data/data";
import Icon from "../Icon";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import theme from "src/styles/Theme";

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
  pointer-events: ${({ isIdModal }) => (isIdModal ? "none" : null)};
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

type MenuItemProps = {
  isActive: boolean;
  isIdModal: boolean;
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
          <MenuItem key={i} isActive={isActive} isIdModal={isIdModal}>
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
