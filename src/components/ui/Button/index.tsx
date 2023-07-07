import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./styles";
import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export function NewTask({ loading, children, ...rest }: ButtonProps) {
  return (
    <Button disabled={loading} {...rest}>
      {loading ? <FaSpinner /> : <span>{children}</span>}
    </Button>
  );
}
