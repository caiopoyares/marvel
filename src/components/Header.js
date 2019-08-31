import React from "react";
import { HeaderStyle, Title } from "./Header.style";
import logo from "../img/marvel-logo.png";

function Header() {
  return (
    <HeaderStyle>
      <Title>
        <img src={logo} alt="Marvel Heroes" title="Marvel Heroes" />
      </Title>
    </HeaderStyle>
  );
}

export default Header;
