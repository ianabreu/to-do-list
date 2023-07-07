import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  padding: 0.4rem;
  border-radius: 0.5rem;
  transition: filter 0.2s;

  &[disabled] {
    cursor: not-allowed;
  }
  &:hover {
    filter: brightness(1.08);
  }
`;
