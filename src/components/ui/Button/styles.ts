import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.BLUE_100};
    color: ${theme.COLORS.BLUE_500};
    font-size: ${theme.FONT_SIZE.LG};
    font-weight: 700;
    border-radius: ${theme.BORDER_RADIUS.B08};
    padding: ${theme.SPACING.P08};
    &:hover {
      filter: opacity(0.9);
    }
    &[type*="reset"] {
      background-color: ${theme.COLORS.WHITE};
      color: ${theme.COLORS.GRAY_300};
      font-size: ${theme.FONT_SIZE.MD};
      font-weight: 400;
    }
    &[disabled] {
      cursor: not-allowed;
    }
  `}
`;
