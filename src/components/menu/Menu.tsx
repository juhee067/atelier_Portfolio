import React, { useState } from "react";
import styled from "styled-components";
import SearchEngine from "./SearchEngine";
import SideMenu from "./SideMenu";

const MenuContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  z-index: 999;
`;

const Menu = () => {
  let [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <MenuContainer>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <SearchEngine isOpen={isOpen} setIsOpen={setIsOpen} />
    </MenuContainer>
  );
};
export default Menu;
