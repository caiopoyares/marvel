import React from "react";
import { HeaderStyle, Title } from "./style";
import logo from "../../img/marvel-logo.png";
import SearchField from "./SearchField/";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header({ lastHeight }) {
  return (
    <HeaderStyle>
      <Title>
        <Link to={{ pathname: "/", offsetY: lastHeight }}>
          <img src={logo} alt="Marvel Heroes" title="Marvel Heroes" />
        </Link>
      </Title>
      <SearchField />
    </HeaderStyle>
  );
}

const mapStateToProps = state => {
  return {
    lastHeight: state.characters.lastHeight
  };
};

export default connect(mapStateToProps)(Header);
