import { object, string } from "yup"

let userSchema = object({
    fullname: string().required("Este campo es requerido"),
    phone: string().required("Este campo es requerido"),
    email: string().email("El campo debe tener un @"),
})

const validateForm = async(dataForm) =>{
    try{
        await userSchema.validate(dataForm)
        return { status: "success" }
    } catch(error){
        return { status: "error", message: error.message }
    }
}

export default validateForm