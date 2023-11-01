import React from "react";
import styled from "styled-components";
import SearchEngine from "./SearchEngine";
import SideMenu from "./SideMenu";

const MenuContainer = styled.div`
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <SideMenu />
      <SearchEngine />
    </MenuContainer>
  );
};
export default Menu;
