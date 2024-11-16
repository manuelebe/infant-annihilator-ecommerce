import { React, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import "./cart.css"

const Cart = () => {
    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(CartContext)
    const [mouseDownButton, setMouseDownButton] = useState(0)

    const handleMouseDownButton = (button) =>{
        setMouseDownButton(button)
    }
    const handleMouseUpButton = () =>{
        setMouseDownButton(0)
    }

    if(cart.length === 0){
        return(
            <div className="emptyCartContainer">
                <h2 color="emptyCartTitle">No hay productos en el carrito</h2>
                <Link to="/" className="emptyCartLink">Seguir comprando</Link>
            </div>
        )
    }
  return (
    <div className="cartContainer">
        <div className="productCartContainer">
            {
                cart.map((productCart) =>(
                    <div key={productCart.id} className="productContainer">
                        <img src={productCart.src} alt="Producto" className="cartImg"/>
                        <div className="sectionDiv">
                            <p className="cartText">{productCart.name}</p>
                        </div>
                        <div className="sectionDiv">
                            <p className="cartTitle">Precio c/u</p>
                            <p className="cartText">${productCart.price}</p>
                        </div>
                        <div className="sectionDiv">
                            <p className="cartTitle">Cantidad:</p>
                            <p className="cartText">{productCart.quantity}</p>
                        </div>
                        <div className="sectionDiv">
                            <p className="cartTitle">Total</p>
                            <p className="cartText">${productCart.price * productCart.quantity}</p>
                        </div>
                        <button onClick={() => deleteProductById(productCart.id)} className="deleteButton">
                            <img src="/img/trash.webp" className="deleteIcon"/>
                        </button>
                    </div>
                ))
            }
        </div>
        <div className="cartCheckoutContainer">
            <p className="cartText">Precio total: ${totalPrice()}</p>
            <button onClick={deleteCart} className={mouseDownButton === 1 ? "mouseDownDelete" : "cartButton"} onMouseDown={() => handleMouseDownButton(1)} onMouseUp={handleMouseUpButton}>Eliminar carrito</button>
            <Link to="/checkout" className={mouseDownButton === 2 ? "mouseDownCheckout" : "cartLink"} onMouseDown={() => handleMouseDownButton(2)} onMouseUp={handleMouseUpButton}>Terminar mi compra</Link>
        </div>
    </div>
  )
}

export default Cart
