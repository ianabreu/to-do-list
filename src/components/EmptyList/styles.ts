import styled, { css } from "styled-components";
export const ContainerEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  -webkit-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  -moz-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    margin-top: ${theme.SPACING.P16};
    padding: ${theme.SPACING.P16};
    gap: ${theme.SPACING.P08};
    border-radius: ${theme.BORDER_RADIUS.B08};
    p {
      font-weight: 400;
      text-align: left;
      font-size: ${theme.FONT_SIZE.MD};
      color: ${theme.COLORS.GRAY_600};
      padding-bottom: ${theme.SPACING.P08};
      width: 70%;
      text-align: center;
    }
  `}
`;
