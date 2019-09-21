import styled from "styled-components";
import BgImage from "./img/marvel-comics.jpg";

//Global styles
const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: linear-gradient(
      to bottom,
      rgba(237, 29, 36, 1) 15%,
      rgba(237, 29, 36, 0.9) 35%,
      rgba(237, 29, 36, 0.7) 70%,
      rgba(237, 29, 36, 0.6) 100%
    ),
    url(${BgImage});
  background-repeat: repeat;
  background-attachment: fixed;
  padding-bottom: 2rem;
  min-height: 100vh;
`;

export default StyledApp;
