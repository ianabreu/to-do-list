import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonFilter, ButtonFilterTypeStyleProps } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: ButtonFilterTypeStyleProps;
  children: ReactNode;
}

export const FilterBtn: React.FC<ButtonProps> = ({
  active = "false",
  children,
  ...rest
}) => {
  return (
    <ButtonFilter $active={active} {...rest}>
      {children}
    </ButtonFilter>
  );
};
