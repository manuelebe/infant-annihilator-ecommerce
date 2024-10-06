import React from 'react'
import "./background.css"
import Tboy from "../../assets/background_tboy.webp"

const Background = ({tboy}) => {
  return (
    <div>
        <img src={Tboy} alt="Album cover" className="background"/>
    </div>
  )
}

export default Background
