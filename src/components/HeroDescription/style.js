import styled from "styled-components";

const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-right: 1.2rem;
  margin-left: 1.2rem;
  @media (min-width: 700px) {
    text-align: left;
    max-width: 400px;
  }
  @media (min-width: 700px) {
    margin: 0 auto;
    justify-content: center;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    max-width: 800px;
    box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.3);
  }

  .img-container {
    margin: 0 auto;
    border-radius: 6px 0 0 6px;
    max-width: 100%;
    overflow: hidden;

    @media (min-width: 700px) {
      min-width: 400px;
    }
    img {
      display: block;
      max-width: 100%;

      @media (min-width: 700px) {
        max-width: 400px;
      }
    }
  }

  .hero-description-box {
    display: flex;
    flex-direction: column;
    border-radius: 0 6px 6px 0;
    background-color: white;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    h3 {
      text-align: left;
    }
  }

  .hero-description {
    small {
      display: inline-block;
      line-height: 1.4;
      color: #999;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      margin: 0 auto;
      margin-bottom: 1.5rem;
    }
    p {
      color: #999;
      font-size: 0.8rem;
      margin-bottom: 0.8rem;
      margin-top: 0;
    }
    span {
      color: #333;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  .detail-btn {
    margin-top: auto;
    padding: 0.7rem 2rem;
    margin-bottom: 2rem;
    color: white;
    text-align: center;
    background-color: crimson;
    border-radius: 4px;
    text-decoration: none;
    border: 2px solid crimson;
  }
`;

export { CharactersContainer };
