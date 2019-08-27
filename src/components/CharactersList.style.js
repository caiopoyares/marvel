import styled from "styled-components";

const CharactersContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const List = styled.ul`
  display: grid;
  grid-gap: 50px 30px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  object-fit: cover;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 100%;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;

export { CharactersContainer, List, Image, ImageContainer };
