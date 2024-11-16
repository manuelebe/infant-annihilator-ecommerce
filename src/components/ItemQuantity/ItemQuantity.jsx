import {React, useState} from 'react'

const ItemQuantity = ({stock, addProduct}) => {
    const [quantity, setQuantity] = useState(1)
    const [mouseDownButton, setMouseDownButton] = useState(0)

    const handleClickSubtraction = () =>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    const handleClickAddition = () =>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const handleMouseDownButton = (button) =>{
        setMouseDownButton(button)
    }
    const handleMouseUpButton = () =>{
        setMouseDownButton(0)
    }
  return (
    <>
        <p className="textDetail">{quantity}</p>
        <div className="quantityButtonContainer">
            <button onClick={handleClickAddition} onMouseDown={() => handleMouseDownButton(1)} onMouseUp={handleMouseUpButton} className={mouseDownButton === 1 ? "mouseDownButton" : "quantityButton"}>+</button>
            <button onClick={handleClickSubtraction} onMouseDown={() => handleMouseDownButton(2)} onMouseUp={handleMouseUpButton} className={mouseDownButton === 2 ? "mouseDownButton" : "quantityButton"}>-</button>
        </div>
        <button onClick={() => addProduct(quantity)} onMouseDown={() => handleMouseDownButton(3)} onMouseUp={handleMouseUpButton} className={mouseDownButton === 3 ? "mouseDownAddButton" : "addButton"}>Agregar al carrito</button>
    </>
  )
}

export default ItemQuantity
