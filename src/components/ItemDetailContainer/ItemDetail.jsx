import { React, useState, useContext } from 'react'
import "./itemDetail.css"
import ItemQuantity from '../ItemQuantity/ItemQuantity'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
    const [showCheckout, setShowCheckout] = useState(false)
    const {addProductInCart} = useContext(CartContext)

    const addProduct = (quantity) =>{
      const productCart = {...product, quantity: quantity}
      addProductInCart(productCart)
      setShowCheckout(true)
    }

  return (
    <div className="itemDetailContainer">
      <div className="itemDetails">
        <div className="imageDetailContainer">
            <img src={product.src} className="imageDetail"/>
        </div>
        <div className="textDetailContainer">
            <h2 className="titleDetail">{product.name}</h2>
            <div className="descDetail">
              {
                product.description.map((desc) =>(
                  <i className="textDetail descText" key={desc}>{desc}</i>
                ))
              }
            </div>
            <p className="textDetail">${product.price}</p>
            <i className="textDetail stockText">Stock disponible: "{product.stock}"</i>
        </div>
      </div>
      <hr className="itemDetailLine"/>
      <div className="itemQuantityContainer">
        <ItemQuantity stock={product.stock} addProduct={addProduct}/>
        {
          showCheckout === true ? (
            <Link to="/cart" className="linkDetail">Ir al carrito</Link>
          ) : (
            ""
          )
        }
      </div>
    </div>
  )
}

export default ItemDetail
