import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  -webkit-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  -moz-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    margin-top: ${theme.SPACING.P16};
    padding: ${theme.SPACING.P16};
    gap: ${theme.SPACING.P08};
    border-radius: ${theme.BORDER_RADIUS.B08};
    input {
      width: ${theme.FONT_SIZE.XL};
      height: ${theme.FONT_SIZE.XL};
      cursor: pointer;
    }
  `}
`;

export const ContentInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${({ theme }) => css`
    padding: ${theme.SPACING.P08};
    h2 {
      text-decoration: line-through;
      text-align: left;
      font-size: ${theme.FONT_SIZE.MD};
      color: ${theme.COLORS.GRAY_600};
      border-bottom: ${theme.BORDER_STYLE.LIGHT};
      padding-bottom: ${theme.SPACING.P08};
    }
    time {
      text-align: right;
      font-size: ${theme.FONT_SIZE.SM};
      color: ${theme.COLORS.GRAY_500};
      margin-top: ${theme.SPACING.P08};
    }
  `}
`;

export const IconButton = styled.button`
  ${({ theme, color }) => css`
    width: ${theme.FONT_SIZE.XL};
    height: ${theme.FONT_SIZE.XL};
    margin-left: ${theme.SPACING.P08};
    color: ${color};
    background-color: ${theme.COLORS.GRAY_50};
    &:hover {
      filter: brightness(1.2);
    }
  `}
`;
