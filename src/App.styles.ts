import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundHover};
  min-height: 100vh;
`;
export const ContainerArea = styled.div`
  margin: auto;
  max-width: 980px;
`;
export const HeaderArea = styled.div`
  background-color: ${({ theme }) => theme.color.backgroundLight};
  padding: ${({ theme }) => theme.spacing.p8};
  border-bottom-left-radius: ${({ theme }) => theme.border.radius.b16};
  border-bottom-right-radius: ${({ theme }) => theme.border.radius.b16};
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.p8};
  margin-bottom: ${({ theme }) => theme.spacing.p8};
  border-bottom: ${({ theme }) => theme.border.style};
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.color.gray.darker};
  text-align: center;
`;
export const NewTask = styled.button`
  background-color: ${({ theme }) => theme.color.blue.blue100};
  color: ${({ theme }) => theme.color.blue.blue500};
  font-size: ${({ theme }) => theme.font.h3};
  font-weight: 700;
  border-radius: ${({ theme }) => theme.border.radius.b16};
  padding: ${({ theme }) => theme.spacing.p16};
`;

export const FilterArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Filter = styled.button`
  color: ${({ theme }) => theme.color.blue.blue500};
  font-size: ${({ theme }) => theme.font.h3};
  font-weight: 700;
  padding: ${({ theme }) => theme.spacing.p8};
`;
export const TaskNumber = styled.span`
  background-color: ${({ theme }) => theme.color.blue.blue500};
  color: ${({ theme }) => theme.color.gray.light};
  font-size: ${({ theme }) => theme.font.h3};
  font-weight: 700;
  padding: ${({ theme }) => `${theme.spacing.p4} ${theme.spacing.p8}`};
  border-radius: ${({ theme }) => theme.border.radius.b8};
`;
