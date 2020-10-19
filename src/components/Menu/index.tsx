import React from "react";
import { HeaderMenu } from "./Menu";
import { MenuItem } from "./MenuItem";
import logo from "../../assets/images/CNN.svg";

function Test() {
  return (
    <HeaderMenu logo={logo}>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </HeaderMenu>
  );
}

export { HeaderMenu, MenuItem };
