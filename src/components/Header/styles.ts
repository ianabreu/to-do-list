import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.SPACING.P08};
    margin-bottom: ${theme.SPACING.P08};
    border-bottom: ${theme.BORDER_STYLE.DARK};
  `}
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Title = styled.h1`
  flex: 1;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.XL};
  `}
`;
