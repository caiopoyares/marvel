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
  background-color: #4caf50;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 2px;
  padding: 0.6rem 2.4rem;
  min-height: 40px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 1px;
  &:hover {
    background-color: #43a047;
  }
`;

export { BtnContainer, Button, Loader };
