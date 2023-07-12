import { InputHTMLAttributes } from "react";
import { InputStyles, LabelStyles } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <LabelStyles>
      {label}
      <InputStyles {...rest} />
    </LabelStyles>
  );
}
