import { InputHTMLAttributes, Ref, forwardRef } from "react";
import { InputStyles, LabelStyles } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef(
  ({ label, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <LabelStyles>
        {label}
        <InputStyles ref={ref} {...rest} />
      </LabelStyles>
    );
  }
);
