import React from 'react'
import ItemList from "./ItemList"
import "./itemListContainer.css"
import HocFilterProducts from '../../hoc/HocFilterProducts'

const ItemListContainer = ({products}) =>{
    return (
        <div className="itemListContainer">
            <ItemList products={products}/>
        </div>
    )
}

const ItemListContainerWithHoc = HocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc