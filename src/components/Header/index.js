import React from "react";
import { HeaderStyle, Title } from "./style";
import logo from "../../img/marvel-logo.png";
import SearchField from "./SearchField/";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderStyle>
      <Title>
        <Link to="/">
          <img src={logo} alt="Marvel Heroes" title="Marvel Heroes" />
        </Link>
      </Title>
      <SearchField />
    </HeaderStyle>
  );
}

export default Header;
