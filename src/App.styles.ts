import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundHover};
  min-height: 100vh;
  padding: 0 ${({ theme }) => theme.spacing.p8};
`;
export const ContainerArea = styled.div`
  margin: auto;
  max-width: 980px;
`;
export const TopArea = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundLight};
  padding: ${({ theme }) => theme.spacing.p8};
  border-bottom-left-radius: ${({ theme }) => theme.border.radius.b16};
  border-bottom-right-radius: ${({ theme }) => theme.border.radius.b16};
  -webkit-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  -moz-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
`;
