import React from "react";
import { HeaderStyle, Title } from "./style";
import logo from "../../img/marvel-logo.png";

function Header() {
  return (
    <HeaderStyle>
      <Title>
        <a href="/">
          <img src={logo} alt="Marvel Heroes" title="Marvel Heroes" />
        </a>
      </Title>
    </HeaderStyle>
  );
}

export default Header;
