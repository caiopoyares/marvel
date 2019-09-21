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

export { CharactersContainer, List };
