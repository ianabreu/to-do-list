import styled from "styled-components";

export const FilterArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FilterBtn = styled.button`
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
