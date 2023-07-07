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
`;
export const Title = styled.h1`
  flex: 1;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
  `}
`;
export const NewTask = styled.button`
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
  `}
`;
