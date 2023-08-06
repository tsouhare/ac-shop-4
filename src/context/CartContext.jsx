import { createContext } from "react";
import { itemsData } from "../components/cart/itemsData.js"
import { useState } from "react";

export const CartContext = createContext()

export function CartContextProvider({children}) {
  
    const [currentProduct, setCurrentProduct] = useState(itemsData);

    function sumPrice () {
    let totalPrice= 0
    for( let i = 0; i < currentProduct.length; i++ ) {
      totalPrice += currentProduct[i].price * currentProduct[i].quantity;
    }
    return (totalPrice)
  }


    return (
        <CartContext.Provider value={{currentProduct, setCurrentProduct, sumPrice }}>
            {children}
        </CartContext.Provider>
    )
}