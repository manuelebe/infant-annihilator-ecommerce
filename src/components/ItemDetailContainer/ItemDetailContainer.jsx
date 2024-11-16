import {useState, useEffect, React} from "react"
import {useParams} from "react-router-dom"
import ItemDetail from './ItemDetail.jsx'
import { doc, getDoc } from "firebase/firestore"
import Loading from '../Loading/Loading.jsx'
import db from "../../db/db.js"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {idProduct} = useParams()

    const getProductById = () =>{
        const docRef = doc(db, "products", idProduct)
        getDoc(docRef)
            .then((dataDb) => {
                const productDb = {id: dataDb.id, ...dataDb.data()}
                setProduct(productDb)
            })
            .finally(() => setLoading(false))
    }

    useEffect(() =>{
        setLoading(true)
        getProductById()
    }, [idProduct])

  return (
    <>
        {
            loading === true ? <Loading/> : <ItemDetail product={product}/>
        }
    </>
  )
}

export default ItemDetailContainer
