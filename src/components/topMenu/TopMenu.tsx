import React from "react";
import styled from "styled-components";
import File from "./File";

const MenuContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 50px;
  background-color: ${({ theme }) => theme.color.menuBg};
`;

const TopMenu = () => {
  return (
    <MenuContainer>
      <File />
    </MenuContainer>
  );
};

export default TopMenu;
