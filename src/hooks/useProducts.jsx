import React from 'react'
import {useState, useEffect} from "react"
import {getProducts} from "../data/data.js"
import {useParams} from "react-router-dom"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

    useEffect(() => {
      setLoading(true)

      getProducts()
        .then((data) => {
          if(idCategory){
            const filterProducts = data.filter((product) => product.category === idCategory)
            setProducts(filterProducts)
          } else{
            setProducts(data)
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [idCategory])
  return {products, loading}
}

export default useProducts
