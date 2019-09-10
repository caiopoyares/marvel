import styled from "styled-components";

const CharactersContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 700px) {
    text-align: left;
  }
  @media (min-width: 700px) {
    display: flex;
    margin: 0 auto;
    padding: 0 1rem;
    justify-content: center;
  }

  .img-container {
    max-width: 100%;
    overflow: hidden;
    @media (min-width: 700px) {
      min-width: 400px;
    }
    img {
      display: block;
      max-width: 300px;
      margin: 0 auto;
      @media (min-width: 700px) {
        max-width: 400px;
      }
    }
  }

  .hero-description {
    margin: 0 1.5rem;
    .hero__subtitle {
      margin: 0 auto;
      max-width: 450px;
      @media (min-width: 700px) {
        max-width: none;
      }
    }
    p {
      color: #999;
    }
    span {
      color: #333;
    }
  }

  .detail-btn {
    display: inline-block;
    padding: 0.7rem 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: white;
    background-color: #ed1d24;
    border-radius: 4px;
    text-decoration: none;
    border: 2px solid crimson;
    @media (min-width: 700px) {
      margin-left: 1.5rem;
    }
  }
`;

export { CharactersContainer };
