import styled, { css } from "styled-components";

export type ButtonFilterTypeStyleProps = "true" | "false";

type ButtonFilterProps = {
  $active: ButtonFilterTypeStyleProps;
};

export const FilterArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonFilter = styled.button<ButtonFilterProps>`
  font-weight: 700;
  ${({ theme, $active }) => css`
    color: ${$active === "true"
      ? theme.COLORS.BLUE_500
      : theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD};
    padding: ${theme.SPACING.P08};
    background-color: ${theme.COLORS.WHITE};
    &:hover {
      color: ${theme.COLORS.BLUE_500};
      span {
        background-color: ${theme.COLORS.BLUE_500};
      }
    }

    span {
      font-weight: 700;
      ${({ theme }) => css`
        background-color: ${$active === "true"
          ? theme.COLORS.BLUE_500
          : theme.COLORS.GRAY_200};
        color: ${theme.COLORS.GRAY_50};
        font-size: ${theme.FONT_SIZE.SM};
        padding: ${`${theme.SPACING.P04} ${theme.SPACING.P08}`};
        border-radius: ${theme.BORDER_RADIUS.B08};
      `}
    }
  `}
`;
