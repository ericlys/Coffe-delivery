import {  InputHTMLAttributes, useState } from "react";
import { RefCallBack } from "react-hook-form";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  optional?: boolean,
  label: string,
  inputRef: RefCallBack,
  width?: number
}

export function Input({label, width, optional = false, inputRef, ...rest}: InputProps) {
  const [onFocus, setOnFocus] = useState(false);

  return(
    <Container width={width}>
      <label htmlFor={label}/>
      <input {...rest} 
        ref={inputRef}
        onFocus={() => setOnFocus(true)} 
        onBlur={() => setOnFocus(false)} 
      />
      {onFocus || optional && <span>Opcional</span>}
    </Container>
  )
}