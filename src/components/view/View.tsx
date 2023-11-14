import React, { RefObject } from "react";
import styled from "styled-components";
import Home from "src/pages/Home";
import { About } from "src/pages/About";
import { Contact } from "src/pages/Contact";
import Footer from "src/pages/Footer";
import { Project } from "src/pages/Project";
import { ProjectDetail } from "src/pages/ProjectDetail";
import IdModal from "../idModal/IdModal";

const ViewContainer = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  padding: 50px 0 50px 80px;
  margin: 0 auto;
`;

const ViewContent = styled.div``;

interface RefProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const View = ({ homeRef, aboutRef, projectRef, contactRef }: RefProps) => {
  return (
    <ViewContainer>
      <ViewContent>
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Project ref={projectRef} />
        <Contact ref={contactRef} />
        <Footer />
        <ProjectDetail />
      </ViewContent>
    </ViewContainer>
  );
};

export default View;
