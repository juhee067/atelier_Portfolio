import React from "react";
import styled from "styled-components";
import File from "./File";

const MenuContainer = styled.div`
  position: fixed;
  margin-left: 81px;
  width: 100vw;
  height: 50px;
  background-color: ${({ theme }) => theme.color.menuBg};
  z-index: 999;
`;

const TopMenu = () => {
  return (
    <MenuContainer>
      <File />
    </MenuContainer>
  );
};

export default TopMenu;
