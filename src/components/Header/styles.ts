import styled from "styled-components";

export const HeaderArea = styled.div`
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
