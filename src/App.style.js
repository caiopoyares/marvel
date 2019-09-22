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

  & .loader {
    position: fixed;
    width: 70px;
    height: 70px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background-color: white;
    border-radius: 4px;
    border: 1px solid black;
    box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default StyledApp;
