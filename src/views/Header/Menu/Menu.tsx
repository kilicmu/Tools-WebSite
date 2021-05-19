import React, { PropsWithChildren } from "react";
import styleSheet from "./menu.module.scss";
import logo from "@assets/images/logo.png";
import styled from "styled-components";
import downIcon from "@assets/images/down-icon.png"
import { useMobile } from "../../../common/resopnsive/useMobile";
import MobileContainer from "./MobileContainer";


interface HeaderProps {
  width?: string;
  height?: string;
  children: JSX.Element[] | JSX.Element | null;
}

const UserContainer = styled.div`
  position: relative;
  width: 72px;
  height: 48px;
  top: 16px;
  margin-left: 16px;
`


const _Header = ({ children }: PropsWithChildren<HeaderProps>, ref: any) => {
  const isMobile = useMobile();

  const list = () => (
    <ul ref={ref} onClick={changeActive}>
      {children}
      <UserContainer>
        <div className={styleSheet.avator}></div>
        {!isMobile ? <img className={styleSheet['down-icon']} src={downIcon} alt={'down icon'} />:null}
      </UserContainer>
    </ul> 
  )

  return (
    <header className={styleSheet["menu-header"]} ref={ref}>
      <div className={styleSheet["menu-header__content"]}>
        <a href='/'>
          <img 
            src={logo} 
            className={styleSheet.logo} 
            alt="logo" 
            style={
                isMobile ? {
                position: "absolute",
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              } : {}
            }
          />
        </a>
        {
          isMobile ? <MobileContainer children={list()} /> : list()
        }
      </div>
    </header>
  );
};

/**
 * animation controller function
 * @param e event
 */
const changeActive = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
  const targetElm = e.target as any;
  const allLis = targetElm.parentElement.children;
  for (let li of allLis) {
    li.classList.remove(styleSheet.active);
  }
  targetElm.classList.add(styleSheet.active);
  e.preventDefault();
};

/**
 * regular children -> array
 * @param children react children
 */

export const HeaderMenu = React.forwardRef<HTMLElement, HeaderProps>(_Header);
