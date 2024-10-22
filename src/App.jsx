import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import './App.css'
import ItemListContainerWithHoc from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Background from "./components/Background/Background"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Background/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainerWithHoc/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainerWithHoc/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
