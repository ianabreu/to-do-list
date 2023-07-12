import styled, { css } from "styled-components";

export const LabelStyles = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    gap: ${theme.SPACING.P08};
  `}
`;
export const InputStyles = styled.input`
  ${({ theme }) => css`
    margin-bottom: ${theme.SPACING.P20};
    height: ${theme.SPACING.P24};
    border-radius: ${theme.BORDER_RADIUS.B08};
    background-color: ${theme.COLORS.GRAY_100};
    border: ${theme.BORDER_STYLE.LIGHT};
    color: ${theme.COLORS.GRAY_700};
    padding: ${theme.SPACING.P16};
    &::placeholder {
      color: ${theme.COLORS.GRAY_300};
    }
  `}
`;
