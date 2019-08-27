import styled from "styled-components";

const CharactersContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  border: 1px solid red;
`;

const List = styled.ul`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 300px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  object-fit: fill;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

export { CharactersContainer, List, Image, ImageContainer };
