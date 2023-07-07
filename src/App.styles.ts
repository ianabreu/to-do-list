import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.COLORS.GRAY_100};
    padding: 0 ${theme.SPACING.P16};
  `}
`;

export const CenterArea = styled.div`
  margin: auto;
  max-width: 980px;
`;

export const TopArea = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    padding: ${theme.SPACING.P08};
    border-bottom-left-radius: ${theme.BORDER_RADIUS.B16};
    border-bottom-right-radius: ${theme.BORDER_RADIUS.B16};

    -webkit-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
    -moz-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
    box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  `}
`;
