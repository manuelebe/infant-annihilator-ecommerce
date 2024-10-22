import React from 'react'
import IconCart from "/img/cart_icon.webp"

const CartWidget = () => {
  return (
    <div className="cartWidget">
        <img src={IconCart} alt="Carrito de compras" className="iconCart"/>
        <h4 className="navText">1</h4>
    </div>
  )
}

export default CartWidget
