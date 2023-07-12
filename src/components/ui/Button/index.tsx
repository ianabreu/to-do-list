import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as ButtonUI } from "./styles";
import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <ButtonUI disabled={loading} {...rest}>
      {loading ? <FaSpinner /> : <span>{children}</span>}
    </ButtonUI>
  );
}
