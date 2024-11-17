import { React, useState, useContext, useEffect } from 'react'
import FormCheckout from './FormCheckout'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, setDoc, doc, collection, } from 'firebase/firestore'
import db from '../../db/db'
import { Link } from 'react-router-dom'
import validateForm from '../../utils/validateForm'
import { toast } from 'react-toastify'
import "./checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  })
  const [idOrder, setIdOrder] = useState(null)
  const [cartCopy, setCartCopy] = useState([])
  const {cart, totalPrice, deleteCart} = useContext(CartContext)

  const handleChangeInput = (event) =>{
    setDataForm({...dataForm, [event.target.name]: event.target.value})
  }
  const handleSubmitForm = async(event) =>{
    event.preventDefault()

    const order = {
      buyer: {...dataForm},
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    }

    try{
      const response = await validateForm(dataForm)
      if(response.status === "error") throw new Error(response.message)
      toast.success("Subiendo orden...")
      uploadOrder(order)
    } catch(error){
      toast.error(error.message)
    }
  }
  
  const updateStock = () =>{
    cart.map(({id, quantity, ...dataProduct}) =>{
      const productRef = doc(db, "products", id)
      setDoc(productRef, {...dataProduct, stock: dataProduct.stock - quantity})
    })
    deleteCart()
  }
  
  const uploadOrder = (newOrder) =>{
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
      .then((response) => setIdOrder(response.id))
      .catch((error) => console.log(error))
      .finally(() =>{
        updateStock()
      })
  }

  const totalCopyPrice = () =>{
    const price = cartCopy.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0)
    return price
  }

  useEffect(() =>{
    setCartCopy([...cart])
}, [])

  return (
    <div>
      {
        idOrder === null ? (
          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>
        ) : (
          <>
            <div className="orderContainer">
              <h2 className="orderTitle">¡Su orden se subió correctamente!</h2>
              <p className="orderText">Guarde su número de seguimiento: {idOrder}</p>
              <Link to="/" className="orderLink">Seguir comprando</Link>
            </div>
            <div className="orderProductContainer">
              {
                cartCopy.map((orderProduct) =>(
                  <div key={orderProduct.id} className="productContainer">
                      <img src={orderProduct.src} alt="Producto" className="orderImg"/>
                      <div className="sectionDiv">
                          <p className="orderText">{orderProduct.name}</p>
                      </div>
                      <div className="sectionDiv">
                          <p className="orderTitle">Cantidad:</p>
                          <p className="orderText">{orderProduct.quantity}</p>
                      </div>
                      <div className="sectionDiv">
                          <p className="orderTitle">Precio total</p>
                          <p className="orderText">${orderProduct.price * orderProduct.quantity}</p>
                      </div>
                  </div>
                ))
              }
              <p className="orderTitle">Precio total: ${totalCopyPrice()}</p>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Checkout
