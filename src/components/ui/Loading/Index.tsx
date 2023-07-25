import { Sentry } from "react-activity";
import "react-activity/dist/library.css";
import styled, { css } from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    /* background-color: ${theme.COLORS.WHITE}; */
    padding: ${theme.SPACING.P16};
    span {
      font-size: 2rem;
      color: ${theme.COLORS.BLUE_500};
    }
  `}
`;
export function Loading() {
  return (
    <LoadingStyled>
      <Sentry color="#045ff4" size={32} speed={1} animating={true} />
      <span>Carregando</span>
    </LoadingStyled>
  );
}
