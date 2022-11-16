import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productsToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    //if found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }
    //return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1 }]
};

export const CartContext = createContext({
    currentCart: false,
    setCurrentCart: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

/*
product {
    id,
    name,
    price,
    imageUrl
}
cart item {
    id, 
    name,
    price,
    imageUrl
    quantity
}
*/

export const CartProvider = ({children}) => {
    const [currentCart, setCurrentCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {currentCart, setCurrentCart, addItemToCart, cartItems, cartCount};


    return(
        <CartContext.Provider value={value} > {children} </CartContext.Provider>
    )
};
