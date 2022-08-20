import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 10.3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1000px) {
    padding: 1.5rem 0;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  div {
    display: flex;
    align-items: center;

    img:first-child {
      border-right: 1px solid;
      margin-right: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.875rem;

    @media (max-width: 400px) {
      gap: 1rem;
    }
  }
`;

interface PropsA {
  variant: "blue" | "green";
}

export const HyperLink = styled.a<PropsA>`
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  padding: 0.625rem 1.8rem;
  background: ${(props) => (props.variant === "blue" ? "#3754e2" : "#4EC859")};
  border-radius: 50px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) =>
      props.variant === "blue" ? "#304ACB " : "#2DAF38"};
  }
`;
