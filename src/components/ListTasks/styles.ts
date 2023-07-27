import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  $done: boolean;
  $expired: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  -webkit-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  -moz-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  ${({ theme, $done, $expired }) => css`
    background-color: ${theme.COLORS.WHITE};
    margin-top: ${theme.SPACING.P16};
    padding: ${theme.SPACING.P16};
    gap: ${theme.SPACING.P08};
    border-radius: ${theme.BORDER_RADIUS.B08};
    input {
      width: ${theme.FONT_SIZE.XL};
      height: ${theme.FONT_SIZE.XL};
      cursor: ${$expired ? "not-allowed" : "pointer"};
    }
    div {
      display: flex;
      flex-direction: column;
      padding: ${theme.SPACING.P08};
      flex: 1;
      &:last-child {
        flex: none;
        flex-direction: row;
      }
    }
    label {
      text-decoration: ${$expired
        ? "line-through"
        : $done
        ? "line-through"
        : "initial"};
      font-weight: 700;
      text-align: left;
      font-size: ${theme.FONT_SIZE.MD};
      color: ${$done
        ? theme.COLORS.GRAY_200
        : $expired
        ? theme.COLORS.RED_500
        : theme.COLORS.GRAY_600};
      border-bottom: ${theme.BORDER_STYLE.LIGHT};
      padding-bottom: ${theme.SPACING.P08};
    }
    time {
      text-align: right;
      font-size: ${theme.FONT_SIZE.SM};
      color: ${$done
        ? theme.COLORS.GRAY_200
        : $expired
        ? theme.COLORS.RED_500
        : theme.COLORS.GRAY_500};
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
    background-color: ${theme.COLORS.WHITE};
    &:hover {
      filter: brightness(1.2);
    }
  `}
`;
