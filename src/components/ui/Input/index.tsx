import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Input } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function InputAc({ ...rest }: InputProps) {
  return <Input {...rest} />;
}
export function TextArea({ ...rest }: TextAreaProps) {
  return <textarea {...rest}></textarea>;
}
