import {  forwardRef, InputHTMLAttributes, useState } from "react";
import { Container } from "./styles";
import InputMask from "react-input-mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean,
  label: string,
  register?: any,
  width?: number,
  mask?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ optional, label, width, mask='', ...props }, ref) => {

  const [onFocus, setOnFocus] = useState(false);

  return(
    <Container width={width}>
      <label htmlFor={label}/>
      <InputMask
        inputRef={ref}
        mask={mask}
        onFocus={() => setOnFocus(true)} 
        {...props } 
        onBlur={() => setOnFocus(false)} 
      />
      {onFocus || optional && <span>Opcional</span>}
    </Container>
    );
  }
);
