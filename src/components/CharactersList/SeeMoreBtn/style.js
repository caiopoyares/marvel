import styled from "styled-components";
import Spinner from "react-loader";

const BtnContainer = styled.div`
  width: 100%;
  position: relative;
  max-height: 40px;
  margin: 3rem 0;
`;

const Loader = styled(Spinner)`
  position: "relative";
  height: 40px;
  color: white;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: crimson;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 0.6rem 1.2rem;
  min-height: 40px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #cc1036;
  }
`;

export { BtnContainer, Button, Loader };
