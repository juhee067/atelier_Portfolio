import TopMenu from "../topMenu/TopMenu";
import React from "react";
import styled from "styled-components";
import Home from "src/pages/Home";
import { About } from "src/pages/About";
import { Contact } from "src/pages/Contact";
import Footer from "src/pages/Footer";
import { Project } from "src/pages/Project";
import PortfolioText from "../PortfolioText";
import { ProjectDetail } from "src/pages/ProjectDetail";
const ViewContainer = styled.div``;
const ViewContent = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
`;
const View = () => {
  return (
    <ViewContainer>
      <TopMenu />
      <ViewContent>
        <Home />
        <About />
        <PortfolioText />
        <Project />
        <Contact />
        <Footer />
        <ProjectDetail />
      </ViewContent>
    </ViewContainer>
  );
};

export default View;
