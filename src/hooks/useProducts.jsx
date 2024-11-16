import {useState, useEffect, React} from "react"
import {useParams} from "react-router-dom"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import db from "../db/db"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

    const getProducts = () =>{
      const productsRef = collection(db, "products")
      if(idCategory){
        const queryCategories = query(productsRef, where("category", "==", idCategory), orderBy("name", "asc"))
        getDocs(queryCategories)
          .then((dataDb) =>{
            const productsDb = dataDb.docs.map((productDb) =>{
              return{id: productDb.id, ...productDb.data()}
            })
            setProducts(productsDb)
          })
          .catch((error) => console.log(error)) 
          .finally(() => setLoading(false))
      } else{
        const queryNames = query(productsRef, orderBy("name", "asc"))
        getDocs(queryNames)
          .then((dataDb) =>{
            const productsDb = dataDb.docs.map((productDb) =>{
              return {id: productDb.id, ...productDb.data()}
            })
            setProducts(productsDb)
          })
          .catch((error) => console.log(error)) 
          .finally(() => setLoading(false))
      }
    }

    useEffect(() => {
      setLoading(true)
      getProducts()
    }, [idCategory])
  return {products, loading}
}

export default useProducts
