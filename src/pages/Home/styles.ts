import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 0 10.3rem;

  @media (max-width: 1200px) {
    padding: 0 0.5rem;
  }
`;

export const SubContainer = styled.div`
  @media (max-width: 1200px) {
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

export const ContainerDescription = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 2rem;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  strong {
    font-size: 2rem;
    display: block;
    line-height: 2.75rem;
  }

  p {
    line-height: 1.375rem;
  }
`;

export const ContainerVideo = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 2rem;

  strong {
    font-size: 1.5rem;
  }

  iframe {
    width: 100%;
    margin-top: 2.125rem;
    height: 623px;

    @media (max-width: 700px){
      height: 400px;
    }

  }
`;

export const LawfulText = styled.div`
  margin-top: 2.5rem;
  font-size: 0.875rem;
  margin-bottom: 4rem;
`