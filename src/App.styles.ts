import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.backgroundHover};
  color: #797a81;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #000;
  padding-bottom: 20px;
`;
