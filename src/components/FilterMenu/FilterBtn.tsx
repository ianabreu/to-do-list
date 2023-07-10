import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonFilter } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
}

export const FilterBtn: React.FC<ButtonProps> = ({
  active = false,
  children,
  ...rest
}) => {
  return (
    <ButtonFilter $active={active} {...rest}>
      {children}
    </ButtonFilter>
  );
};
