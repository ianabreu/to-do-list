import styled, { css } from "styled-components";

export const FilterArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonFilter = styled.button`
  font-weight: 700;
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE_500};
    font-size: ${theme.FONT_SIZE.MD};
    padding: ${theme.SPACING.P08};
    background-color: ${theme.COLORS.WHITE};
    &:active {
      color: ${theme.COLORS.BLUE_500};
    }
  `}
`;

export const TaskNumber = styled.span`
  font-weight: 700;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.BLUE_500};
    color: ${theme.COLORS.GRAY_50};
    font-size: ${theme.FONT_SIZE.SM};
    padding: ${`${theme.SPACING.P04} ${theme.SPACING.P08}`};
    border-radius: ${theme.BORDER_RADIUS.B08};
  `}
`;
