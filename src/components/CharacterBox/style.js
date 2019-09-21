import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
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

export { Image, ImageContainer, StyledLink };
