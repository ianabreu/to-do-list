import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    margin-bottom: 1.25rem;
    height: 40px;
    border-radius: 0.5rem;
    background-color: var(--gray-050);
    border: 1px solid var(--gray-400);
    color: var(--gray-400);
    padding: 1rem;
    &::placeholder {
      color: ${theme.COLORS.RED_500};
    }
  `}
`;
