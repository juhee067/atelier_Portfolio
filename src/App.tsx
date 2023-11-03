import Menu from "./components/menu/Menu";
import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import View from "./components/view/View";
import styled from "styled-components";

const ContentBox = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ContentBox>
        <Menu />
        <View />
      </ContentBox>
    </>
  );
}

export default App;
