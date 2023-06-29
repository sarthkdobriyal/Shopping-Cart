import { createContext, useState } from "react";

const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {

        const itemExists = cartItems.find((cartItem) => cartItem.id === item.id)

        if(itemExists) {
            setCartItems((prev) => prev.map((cartItem) => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem))
            return
        }

        setCartItems((prev) => [...prev, item])
        getTotal();
    }


    const removeFromCart = (id) => {

        const itemQuantity = cartItems.find((item) => item.id === id).quantity

        
         if(itemQuantity > 1  ) {
             let filteredItems = cartItems.map((item) => {
                if(item.id === id) {
                    return {...item, quantity: item.quantity - 1}
                }else return item
            })
            setCartItems(filteredItems)
        }else {
            let filteredItems = cartItems.filter((item) => item.id !== id)
            setCartItems(filteredItems)
        }


        getTotal();
    }

    
    const getTotal = () => {
        return cartItems.reduce((acc,item) => acc + item.price * item.quantity, 0);
    }

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, getTotal}}>{children}</CartContext.Provider>
  )
}

export default CartContext