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
      <MenuItem name="" onClick={goto("/")} style={{ width: 100 }} current>
        Home
      </MenuItem>
      <MenuItem name="tool" onClick={goto("/tool")} style={{ width: 100 }}>
        Tools
      </MenuItem>
      <MenuItem name="other" onClick={goto("/others")} style={{ width: 100 }}>
        Others
      </MenuItem>
      <MenuItem name="join" onClick={goto("/join-us")} style={{ width: 100 }}>
        Join Us
      </MenuItem>
    </HeaderMenu>
  );
};
