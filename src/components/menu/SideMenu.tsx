import React from "react";
import styled from "styled-components";

import { menuData } from "src/data/data";
import Icon from "../Icon";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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

const MenuItem = styled.div<isActiveType>`
  padding: 0 24px;
  margin-bottom: 40px;
  ${({ isActive, theme }) => (isActive ? `border-left: 2px solid ${theme.color.bottomLine};` : "")}
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
`;

interface OpenType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToProject: () => void;
  scrollToContact: () => void;
}

type isActiveType = {
  isActive: boolean;
};

const SideMenu = ({
  isOpen,
  setIsOpen,
  scrollToHome,
  scrollToAbout,
  scrollToProject,
  scrollToContact,
}: OpenType) => {
  const activeItemIndex = 0; // 활성화된 아이템의 index

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
        // 현재 아이템이 활성화된 아이템인지 확인하고, isActive 프로퍼티를 전달합니다.
        const isActive = i === activeItemIndex;
        return (
          <MenuItem key={i} isActive={isActive}>
            <Icon
              icon={item.icon}
              size={30}
              color={item.color}
              margin="0"
              onClick={() => {
                // 각 아이콘을 클릭할 때 해당 함수를 호출합니다.
                if (item.menu === "home") {
                  scrollToHome();
                } else if (item.menu === "about") {
                  scrollToAbout();
                } else if (item.menu === "project") {
                  scrollToProject();
                } else if (item.menu === "contact") {
                  scrollToContact();
                }
              }}
            />
          </MenuItem>
        );
      })}
    </SideMenuContainer>
  );
};

export default SideMenu;
