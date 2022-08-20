import styled from "styled-components";

export const Container = styled.main`
  padding: 0 10.3rem;

  @media (max-width: 1200px) {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  nav {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #666666;

    @media (max-width: 1200px) {
      flex-direction: column;
    }

    a {
      &:hover {
        opacity: 0.8;
      }
    }
  }

  h1 {
    margin-bottom: 2rem;
  }
`;
