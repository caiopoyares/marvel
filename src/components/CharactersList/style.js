import styled from "styled-components";

const CharactersContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const List = styled.ul`
  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0 10px;

  li {
    background-color: white;
    width: 100%;
    overflow: hidden;
    box-shadow: 2px 3px 8px 0px rgba(0, 0, 0, 0.3);
  }
`;

export { CharactersContainer, List };
