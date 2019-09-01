import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  margin-right: 1rem;

  input[type="text"] {
    border: none;
    height: 1.5rem;
    max-width: 6rem;
    font-size: 0.9rem;
    padding: 0.2rem 0 0.2rem 0.3rem;
    @media (min-width: 800px) {
      font-size: 1rem;
      max-width: 8rem;
      height: 1.7rem;
    }
  }

  button {
    cursor: pointer;
    background-color: white;
    height: 1.5rem;
    border: none;
    display: flex;
    align-items: center;
    border-left: 1px solid #ddd;
    @media (min-width: 800px) {
      font-size: 1.1rem;
      height: 1.7rem;
    }
  }

  svg {
    font-size: 1.2rem;
  }
`;

export { StyledForm };
