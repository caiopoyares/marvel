import React, { useState, useEffect } from "react";
import { Button, BtnContainer, Loader } from "./style";
import { connect } from "react-redux";

const SeeMoreBtn = ({ heroes, currPage, nextPage }) => {
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
        {loaded ? (
          <Button onClick={() => nextPg()}>Ver mais</Button>
        ) : (
          <Loader color="#fff" />
        )}
      </BtnContainer>
    )
  );
};

const mapStateToProps = state => {
  return {
    heroes: state.characters.charactersFetched
  };
};

export default connect(mapStateToProps)(SeeMoreBtn);
