import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainerWithHoc from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainerWithHoc/>}/>
            <Route path="/category/:idCategory" element={<ItemListContainerWithHoc/>}/>
            <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
