import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonFilter } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const FilterBtn = ({ children, ...rest }: ButtonProps) => {
  return <ButtonFilter {...rest}>{children}</ButtonFilter>;
};
