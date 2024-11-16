import React from 'react'

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <div>
        <form onSubmit={handleSubmitForm} className="formContainer">
            <h2 className="formTitle">Checkout</h2>
            
            <label htmlFor='fullname' className="formText">Nombre Completo</label>
            <input type="text" name="fullname" id="fullname" value={dataForm.fullname} onChange={handleChangeInput} className="formInput"/>

            <label htmlFor='phone' className="formText">Teléfono</label>
            <input type="number" name="phone" id="phone" value={dataForm.phone} onChange={handleChangeInput} className="formInput"/>

            <label htmlFor='email' className="formText">Email</label>
            <input type="email" name="email" id="email" value={dataForm.email} onChange={handleChangeInput} className="formInput"/>

            <button type="submit" className="formSubmit">Enviar mi orden</button>
        </form>
    </div>
  )
}

export default FormCheckout
