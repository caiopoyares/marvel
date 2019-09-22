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
    max-width: 100%;
    overflow: hidden;

    @media (min-width: 700px) {
      min-width: 400px;
    }
    @media (min-width: 900px) {
      border-radius: 6px 0 0 6px;
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

    background-color: white;
    h3 {
      text-align: left;
    }
    @media (min-width: 900px) {
      border-radius: 0 6px 6px 0;
    }
  }

  .hero-description {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
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

  .hero__details {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #4caf50;
    text-align: center;
    text-transform: uppercase;
    @media (min-width: 900px) {
      border-radius: 0 5px 0 0;
    }
    & p {
      margin: 0;
      flex-basis: 33.333%;
      padding: 0.5rem;
      font-size: 0.7rem;
      color: rgba(255, 255, 255, 0.9);
      font-weight: bold;
      span {
        display: block;
        font-weight: 500;
        margin-top: 0.4rem;
        color: #1b5e20;
        @media (min-width: 700px) {
          letter-spacing: 1px;
        }
      }
    }
  }

  .detail-btn {
    padding: 0.7rem 2rem;
    margin: auto 1.5rem 2rem 1.5rem;
    color: white;
    text-align: center;
    background-color: #ed1d24;
    border-radius: 4px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
    font-weight: bold;
    &:hover {
      background-color: #dc1b21;
    }
  }
`;

export { CharactersContainer };
