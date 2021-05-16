import React from "react";
import { AppRoutes } from "./router/index";
import { Header } from "./views/Header";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

const CenterContainer = styled.article`
  width: 100%;
  margin-top: 75px;
  position: relative;
`

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <CenterContainer style={{height: window.innerHeight - 75}}>
          <AppRoutes />
        </CenterContainer>
      </div>
    </Router>
  );
}

export default App;
