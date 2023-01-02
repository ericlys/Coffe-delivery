import { InputHTMLAttributes, useState } from "react";
import { Container, MinusIcon, PlusIcon } from "./styles";

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement>{
  value: number,
  setValue: (value: number) => void;
}

export function InputNumber({value, setValue, ...rest}: InputNumberProps){
 
  const handleDecrement = () => {
    if(value > 0) {
      setValue(value - 1)
    }
  }

  const handleIncrement = () => {
    setValue(value + 1)
  }

  return(
    <Container>
      <MinusIcon onClick={handleDecrement}/>
        <input value={value} onChange={(e) => setValue(Number(e.target.value))} min={0} {...rest} type="number"/>
      <PlusIcon onClick={handleIncrement}/>
    </Container>
  )
}