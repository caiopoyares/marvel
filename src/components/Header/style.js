import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: #ed1d24;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin: 0 auto 0 0;
  color: black;
  display: flex;
  align-items: center;
  padding: 1.2rem;
  img {
    max-width: 80px;
  }
`;

export { HeaderStyle, Title };
