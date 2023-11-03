import TopMenu from "../topMenu/TopMenu";
import React from "react";
import styled from "styled-components";
import Home from "src/pages/Home";
import { About } from "src/pages/About";

const ViewContainer = styled.div``;
const View = () => {
  return (
    <ViewContainer>
      <TopMenu />
      <Home />
      <About />
    </ViewContainer>
  );
};

export default View;
