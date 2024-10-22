import React from 'react'
import useProducts from "../hooks/useProducts"
import {useState} from "react"
import "./hocFilterProducts.css"
import Loading from '../components/Loading/Loading'

const HocFilterProducts = (Component) => {
  return function () {
    const {products, loading} = useProducts()
    const [query, setQuery] = useState("")

    const changeInput = (event) => {
        setQuery(event.target.value.toLowerCase())
    }

    const search = () => {
        let filterProducts = products.filter((product) => (
            product.name.toLowerCase().includes(query)
        ))
        return filterProducts
    }
    return(
        <>
            {
                loading === true ? <Loading/> : 
                <>
                    <div>
                        <input type="text" placeholder="Buscar productos" onChange={changeInput}/>
                    </div>
                    <Component products={search()}/>
                </>
            }
        </>
    )
  }
}

export default HocFilterProducts
