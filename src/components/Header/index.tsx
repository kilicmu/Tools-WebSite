import React, { useCallback } from "react";
import { HeaderMenu, MenuItem } from "../Menu";
import logo from "../../assets/images/CNN.svg";
import { useHistory } from "react-router";

export const Header = () => {
  const history = useHistory();

  const goto = useCallback(
    (pathname) => {
      return () => {
        history.push(pathname);
      };
    },
    [history]
  );

  return (
    <HeaderMenu logo={{ path: logo }}>
      <MenuItem name="home" onClick={goto("/")} current>
        首页唱唱唱的的的
      </MenuItem>
      <MenuItem name="all" onClick={goto("/all")}>
        全部
      </MenuItem>
    </HeaderMenu>
  );
};
