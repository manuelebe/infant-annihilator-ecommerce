import React from 'react'
import { BarLoader } from 'react-spinners'
import "./loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinnerContainer">
        <BarLoader color="white" size={300}  className="spinner"/>
      </div>
    </div>
  )
}

export default Loading