import { React, useContext } from 'react'
import IconCart from "/img/cart_icon.webp"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    const quantity = totalQuantity()
  return (
    <Link to="/cart" className="cartWidget">
        <img src={IconCart} alt="Carrito de compras" className="iconCart"/>
        <h4 className="navText">{quantity >= 1 && quantity}</h4>
    </Link>
  )
}

export default CartWidget
