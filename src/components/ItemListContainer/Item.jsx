import React from 'react'
import {Link} from "react-router-dom"

const Item = ({product}) => {
  return (
    <div>
        <div className="item">
            <img src={product.src} alt={product.name} className="itemImg"/>
            <h2 className="itemText">{product.name}</h2>
            <p className="itemText">${product.price}</p>

            <Link to={"/detail/" + product.id}>Ver detalles</Link>
        </div>
    </div>
  )
}

export default Item
