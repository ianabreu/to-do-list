import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundLight};
  margin-top: ${({ theme }) => theme.spacing.p8};
  border-radius: ${({ theme }) => theme.border.radius.b16};

  -webkit-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  -moz-box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
  box-shadow: 1px 1px 8px 0px rgba(38, 38, 38, 0.3);
`;
export const Title = styled.h2``;
