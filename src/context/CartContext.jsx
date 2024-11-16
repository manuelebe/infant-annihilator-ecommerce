import { React, createContext, useState, useEffect } from "react"

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const loadCart = localStorage.getItem("cart")

    const isInCart = (idProduct) =>{
        return cart.some((productCart) => productCart.id === idProduct)
    }
    const addProductInCart = (newProduct) =>{
        const condition = isInCart(newProduct.id)
        if(condition){
            const tempCart = [...cart]
            const findIndex = tempCart.findIndex((productCart) => productCart.id === newProduct.id)
            tempCart[findIndex].quantity = tempCart[findIndex].quantity + newProduct.quantity
            if(tempCart[findIndex].quantity <= tempCart[findIndex].stock){
                setCart(tempCart)  
            } else{
                tempCart[findIndex].quantity = tempCart[findIndex].quantity - newProduct.quantity
                console.log("¡No hay suficiente stock!")
            }
            localStorage.cart = JSON.stringify(cart)
        } else{
            setCart([...cart, newProduct])
            localStorage.cart = JSON.stringify([...cart, newProduct])
        }
    }

    const totalQuantity = () =>{
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
        return quantity
    }
    const totalPrice = () =>{
        const price = cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0)
        return price
    }

    const deleteProductById = (idProduct) =>{
        const filterProducts = cart.filter((productCart) => productCart.id !== idProduct)
        setCart(filterProducts)
        localStorage.cart = JSON.stringify(filterProducts)
    }
    const deleteCart = () =>{
        setCart([])
        localStorage.clear()
    }

    useEffect(() =>{
        if(loadCart){
            setCart(JSON.parse(loadCart))
        }
    }, [])
    

    return (
        <CartContext.Provider value={{cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}