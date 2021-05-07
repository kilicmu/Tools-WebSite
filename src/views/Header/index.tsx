import React, { useCallback } from "react";
import { HeaderMenu, MenuItem } from "./Menu";
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
    <HeaderMenu>
      <MenuItem name="" onClick={goto("/")}  current>
        Home
      </MenuItem>
      <MenuItem name="tool" onClick={goto("/tool")} >
        Tools
      </MenuItem>
      <MenuItem name="others" onClick={goto("/others")}>
        Others
      </MenuItem>
      <MenuItem name="join-us" onClick={goto("/join-us")}>
        Join Us
      </MenuItem>
    </HeaderMenu>
  );
};
