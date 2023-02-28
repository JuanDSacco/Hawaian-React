import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from "../../../context/CartContext";
import { useState } from 'react';
import '../../../css/form.css'
import Formulario from '../../Formulario/Formulario';


const initialState = {name:'',email:'',phone:'',message:''}

const Form = () => {

    const [id, setId] = useState();
    const [form, setForm] = useState(initialState);

    // Desestructuracion de contexto
    const {cart, totalPrice, clearCart } = useCartContext();

    const factura = {
        form, 
        items: cart.map(data => ({id: data.id, titulo: data.titulo, precio: data.precio, cantidad: data.cantidad})),
        total: totalPrice()
    }


    const finishClick = (e) => {
        e.preventDefault()
        if(form.name === '' & form.email === ''){
            alert('Todos los campos son requeridos')
        }else{
            const db = getFirestore();
            const userCollection = collection(db, 'compra')
                addDoc(userCollection, factura)
                .then((res) => {
                    alert('Se envió corectamente')
                    setId(res.id)
                    clearCart();
                    setForm(initialState);
                })
                
        }
    }

    // Copia del formulario 
    const changeHandler = (ev) => {
        const {value, name} = ev.target;
        setForm({...form, [name]:value})
    }

    return(
        <div className='form'>
            <Formulario finishClick={finishClick} form={form} changeHandler={changeHandler} />
            
        </div>
    )
}

export default Form;