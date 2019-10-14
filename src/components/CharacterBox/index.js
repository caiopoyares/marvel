import React from "react";
import { Image, ImageContainer, StyledLink, StyledListItem } from "./style";
import { connect } from "react-redux";
import { saveHeight } from "../../actions/charactersActions";

const CharacterBox = ({ name, thumbnail, id, description, dispatch }) => {
  const getLastHeight = () => {
    dispatch(saveHeight(parseInt(window.pageYOffset)));
  };

  return (
    <StyledListItem>
      <StyledLink to={`/hero/${id}`} onClick={() => getLastHeight()}>
        <ImageContainer>
          <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </ImageContainer>
        <div className="character-info" style={{ marginBottom: "2rem" }}>
          <h4>{name}</h4>
          {description ? (
            <small>{description}</small>
          ) : (
            <small>
              Sorry, there is no description available for this hero at the
              moment. Click on this card to get more information about him and
              his comic books.
            </small>
          )}
        </div>
      </StyledLink>
    </StyledListItem>
  );
};

export default connect()(CharacterBox);
