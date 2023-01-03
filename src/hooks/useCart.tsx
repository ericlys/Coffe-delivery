import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"

export const useCart = () => {
  return useContext(ShoppingCartContext);
}