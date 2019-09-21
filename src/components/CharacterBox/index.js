import React from "react";
import { Image, ImageContainer, StyledLink, StyledListItem } from "./style";

const CharacterBox = ({ name, thumbnail, comics, id, description }) => {
  return (
    <StyledListItem>
      <StyledLink to={`/hero/${id}`}>
        <ImageContainer>
          <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </ImageContainer>
        <div className="character-info">
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
          <div className="character-bottom">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </StyledLink>
    </StyledListItem>
  );
};

export default CharacterBox;
