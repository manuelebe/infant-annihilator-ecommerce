import React from 'react'
import "./itemDetail.css"

const ItemDetail = ({product}) => {
  return (
    <div className="itemDetailContainer">
        <div className="imageDetailContainer">
            <img src={product.src}/>
        </div>
        <div className="textDetailContainer">
            <h2 className="titleDetail">{product.name}</h2>
            <p className="textDetail">{product.description}</p>
            <p className="textDetail">${product.price}</p>
        </div>
    </div>
  )
}

export default ItemDetail
