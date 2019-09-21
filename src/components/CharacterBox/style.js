import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 260px;
  object-fit: cover;
  overflow: hidden;
  margin: 0 auto;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;

const StyledListItem = styled.li`
  text-align: left;
  transition: 0.2s;
  &:hover {
    transform: translateY(-8px);
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 0.9rem;
  }

  small {
    display: inline-block;
    line-height: 1.4;
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .character-info {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export { Image, ImageContainer, StyledLink, StyledListItem };
