import React, { ReactChildren, useEffect, useState } from "react";
import { pathToFileURL } from "url";
import styleSheet from "./index.module.scss";
import { Router, Route, Link, useLocation } from "react-router-dom";
import { regularChildren } from "../../common/utils/regularChildren";

interface ILogo {
  path: string;
  link?: string;
}

interface IProps {
  logo: ILogo;
  width?: string;
  height?: string;
  children: JSX.Element[] | JSX.Element | null;
}

const _Header = ({ logo, children }: IProps, ref: any) => {
  const [state, setState] = useState();

  return (
    <header className={styleSheet.MenuHeader}>
      <a href={logo?.link ?? "/"}>
        <img src={logo.path} className={styleSheet.logo} alt="logo" />
      </a>
      <ul ref={ref} onClick={changeActive}>
        {regularChildren(children).map((item) => {
          return item;
        })}
      </ul>
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

export const HeaderMenu = React.forwardRef<HTMLElement, IProps>(_Header);
