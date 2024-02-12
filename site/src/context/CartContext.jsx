import React, {useState} from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const emptyCart = () => {
        setCart([]);
    }
    const value = {
        cart,
        setCart,
        emptyCart
    }
    return <CartProvider value={value}>{children}</CartProvider>
}