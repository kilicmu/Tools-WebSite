import React from "react";
import { HeaderMenu, MenuItem } from "../Menu";

import logo from "../../assets/images/CNN.svg";

export const Header = () => {
  return (
    <HeaderMenu logo={{ path: logo }}>
      <MenuItem>首页唱唱唱的的的</MenuItem>
      <MenuItem>全部</MenuItem>
    </HeaderMenu>
  );
};
