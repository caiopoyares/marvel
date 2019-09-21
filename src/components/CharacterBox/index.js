import React from "react";
import { Image, ImageContainer, StyledLink } from "./style";

const CharacterBox = ({ name, thumbnail, comics, id }) => {
  return (
    <li>
      <StyledLink to={`/hero/${id}`}>
        <ImageContainer>
          <Image src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </ImageContainer>
        <h4 style={{ marginBottom: ".2rem", marginTop: ".8rem" }}>{name}</h4>
        <small style={{ color: "#777" }}>
          Presente em{" "}
          <span style={{ fontWeight: 700 }}>{comics.available}</span> quadrinhos
        </small>
      </StyledLink>
    </li>
  );
};

export default CharacterBox;
