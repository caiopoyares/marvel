import styled from "styled-components";

const CharactersContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const List = styled.ul`
  display: grid;
  grid-gap: 30px 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0 10px;

  li {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  object-fit: cover;
  overflow: hidden;
  margin: 0 auto;
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
