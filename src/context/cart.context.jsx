import { createContext, useState } from "react";

export const CartContext = createContext({
    currentCart: false,
    setCurrentCart: () => {}
});

export const CartProvider = ({children}) => {
    const [currentCart, setCurrentCart] = useState(false);
    const value = {currentCart, setCurrentCart};
    return(
        <CartContext.Provider value={value} > {children} </CartContext.Provider>
    )
}
