import React from 'react'
import {useState} from "react"
import ContadorView from './ContadorView.jsx'

const Contador = () => {
    // let contador = 0;
    const [contador, setContador] = useState(0);
    const [toggle, setToggle] = useState(true);

    const aumentarContador = () =>{
        if(contador < 10){
            setContador(contador + 1);
        }
    }
    const restarContador = () =>{
        if(contador > 0){
            setContador(contador - 1);
        }
    }
    const alternarToggle = () =>{
        setToggle(!toggle);
    }

    return (
        <>
            <ContadorView contador={contador} aumentarContador={aumentarContador} restarContador={restarContador}/>
            <div>
                <p>Valor toggle: {toggle.toString()}</p>
                <button onClick={alternarToggle}>Alternar valor del toggle</button>
            </div>
        </>
    )
}

export default Contador