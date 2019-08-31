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
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #ed1d24;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 0.6rem 1.2rem;
  min-height: 40px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
`;

export { BtnContainer, Button, Loader };
