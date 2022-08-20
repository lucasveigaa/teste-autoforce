import styled from "styled-components";

export const Container = styled.footer`
  background: #000;
  color: #fff;
  padding: 2.5rem 10.3rem;
  font-family: "Ubuntu", sans-serif;

  @media (max-width: 1200px) {
    padding: 1rem 0.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 1rem;
    }

    div {
      display: flex;
      align-items: center;

      span {
        margin-right: 2.2rem;
      }

      img {
        margin-right: 1rem;
      }
    }
  }
`;

export const LogoDealer = styled.img`
  @media (max-width: 700px) {
    width: 200px;
  }
`;

export const Content = styled.div`
  padding: 2rem 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-top: 3rem;

  div {
    display: flex;
    gap: 1rem;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    &:not(:first-child) {
      margin-top: 1rem;
    }

    a {
      color: #fff;

      svg {
        margin-left: 0.5rem;
      }
    }
  }
`;

export const ContainerFooter = styled.div`
  padding-top: 2rem;
  font-size: 0.75rem;
  line-height: 0.875rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;

    img {
      width: 100px;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    a {
      color: #fff;
    }
  }
`;
