import styled, { css } from "styled-components";

export const ModalArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  ${({ theme }) => css`
    h3 {
      font-size: ${theme.FONT_SIZE.XL};
      border-bottom: ${theme.BORDER_STYLE.DARK};
      width: 100%;
      text-align: center;
      padding: ${theme.SPACING.P08};
      margin-bottom: ${theme.SPACING.P08};
    }
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: ${theme.SPACING.P16};
    }
  `}
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 480px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border-radius: ${theme.BORDER_RADIUS.B08};
  `}

  @media (max-width: 570px) {
    width: 80%;
    max-width: 480px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 90vw;
  }
`;
export const Area = styled.div`
  ${({ theme }) => css`
    display: flex;
    :not(:last-child) {
      margin-right: ${theme.SPACING.P08};
    }
  `}
`;
export const DateArea = styled(Area)`
  justify-content: left;
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const ButtonArea = styled(Area)`
  justify-content: end;
`;
