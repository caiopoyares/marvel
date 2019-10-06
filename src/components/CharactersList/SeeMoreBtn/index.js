import React, { useState, useEffect } from "react";
import { Button, BtnContainer } from "./style";
import { connect } from "react-redux";
import Spinner from "react-loader";

const SeeMoreBtn = ({ heroes, nextPage }) => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(true);
  }, [heroes]);

  const nextPg = () => {
    setLoaded(false);
    nextPage();
  };

  return (
    heroes.length > 0 && (
      <BtnContainer>
        <Button onClick={() => nextPg()}>Ver mais</Button>
        {!loaded && <Spinner color="#fff" options={{ position: "relative" }} />}
      </BtnContainer>
    )
  );
};

const mapStateToProps = state => {
  return {
    heroes: state.characters.allCharacters
  };
};

export default connect(mapStateToProps)(SeeMoreBtn);
