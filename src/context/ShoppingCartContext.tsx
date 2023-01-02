import { createContext, ReactNode, useEffect, useState } from "react";

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface Cart {
  product: Product,
  amount: number
}

interface ShoppingCartContextType {
  cart: Cart[],
  amountItems: number,
  addProductToShoppingCart: (product: Product, amount:number) => void,
  removeProductFromShoppingCart: (productId: number) => void,
  clearShoppingCart: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

interface ShoppingCartContextProps {
  children: ReactNode
}

export function ShoppingCartContextProvider({children}: ShoppingCartContextProps) {
  const [cart, setCart] = useState<Cart[]>([])
  const [amountItems, setAmountItems] = useState(0)

  useEffect(() => {
    const storageState = localStorage.getItem('coffe-delivery');
    
    if(storageState) {
      setCart(JSON.parse(storageState))
    }
  },[])

    console.log(cart)
    useEffect(() => {
    const amount = cart.reduce(( acc, item) => 
      acc + item.amount
    , 0)

    setAmountItems(amount)    
  }, [cart])

  function addProductToShoppingCart (product: Product, amount: number) {
    if(amount < 1) {
      return
    }

    const coffeIndex = cart.findIndex( item => item.product.id === product.id)
    
    let newCart = [...cart];

    if(coffeIndex < 0) {
      newCart = [...cart, {product, amount}]
    } else {
      newCart[coffeIndex] = {product, amount: newCart[coffeIndex].amount + amount};
    }
    
    setCart(newCart)
    localStorage.setItem('coffe-delivery',JSON.stringify(newCart));
  }

  function removeProductFromShoppingCart(productId: number) {
    const newListWithoutItem = cart.filter(item => item.product.id !== productId);

    setCart(newListWithoutItem);
    localStorage.setItem('coffe-delivery',JSON.stringify(newListWithoutItem));
  }

  function clearShoppingCart() {
    setCart([]);
  }

  return (
    <ShoppingCartContext.Provider value={{
      cart,
      amountItems,
      addProductToShoppingCart,
      removeProductFromShoppingCart,
      clearShoppingCart
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}