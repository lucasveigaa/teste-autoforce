import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  margin-top: 0.625rem;
  border-bottom: 3px solid #333333;
  padding-bottom: 2rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerContent1 = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;



  span {
    border-left: 3px solid #e5e5e5;
    padding-left: 0.625rem;
  }

  img {
    margin-top: 1.5rem;

    @media (max-width: 700px) {
    width: 85%;
    margin: 0 auto;
  }
  }
`;

export const ContainerContent2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8rem;

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  h3 {
    font-size: 1.5rem;

    @media (max-width: 1200px) {
      margin: 0 auto;
    }
  }

  a {
    text-decoration: none;
    padding: 0.625rem 2.5rem;
    color: #fff;
    width: fit-content;
    font-weight: 700;
    background: #3754e2;
    border-radius: 50px;
    margin-top: 1.5rem;

    transition: background-color 0.2s;

    @media (max-width: 1200px) {
      margin: 1.5rem auto;
    }

    &:hover {
      background: #304acb;
    }
  }
`;

export const ContainerHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  margin: 1rem 0;
  gap: 2rem;

  div {
    display: flex;
  }

  img {
    margin-right: 1rem;
  }

  span {
    font-weight: 700;
    color: #3754e2;
  }

`;

export const SubContainerHighlights = styled.div`
  display: flex;
  flex-direction: column;
`;
