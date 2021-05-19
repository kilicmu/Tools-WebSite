import React, { Fragment } from "react";
// import useHomeService, { HomeService } from "../FigureBed/useFigureBedService";
import styled from "styled-components"
import styleSheet from "./home.module.scss";
import githubIcon from "@assets/images/github-icon-b.png";
import { useHistory } from "react-router";

const HomeContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`
const CenterHelper = styled.div`
  padding: 0 1em;
  display: flex;
  justify-content: center;
`

const Home = () => {
  const history = useHistory()
  return (
    <Fragment>
        <HomeContainer>
          <div className={styleSheet["left-overly"]}/>
          <div className={styleSheet["home-center"]}>
            <h1 className={styleSheet["home-center__title"]}>
              <span>
                <span className={styleSheet["white"]}>TOO</span>LS
              </span> <br/>
              <span>
                <span className={styleSheet["white"]}>PR</span>OVIDER
              </span>
            </h1>
            <div className={styleSheet["home-center__underline"]}></div>
            <h3 className={styleSheet["home-center__introduce"]}>
              <span>awesome tools in this website</span>
            </h3>
            <CenterHelper>
            <div className={styleSheet["home-center__button-group"]}>
              <button 
                className={styleSheet["button-group__left"]}
                onClick={() => history.push("/tool")}
              >Quick Start</button>
              <button 
                className={styleSheet["button-group__right"]}
                onClick={() => history.push("/about")}
              >About Us</button>
            </div>
            </CenterHelper>
            
          </div>
          <div className={styleSheet["background"]}>
            <div className={styleSheet["background__item"]}></div>
            <div className={styleSheet["background__item"]}></div>
            <div className={styleSheet["background__item"]}></div>
            <div className={styleSheet["background__item"]}></div>
          </div>
          <img 
            className={styleSheet["github-icon"]} 
            src={githubIcon} alt="github-icon"
            onClick={() => window.open('https://github.com/kilicmu')}
          />
          <div className={styleSheet["sign"]}>designed by herin @ 2021</div>
        </HomeContainer>
    </Fragment>
  );
};

export default Home;
