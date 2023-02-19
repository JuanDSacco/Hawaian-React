import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { UseCartContext } from "../../../context/CartContext";
import { useState } from 'react';
import './form.css'

const Form = () => {

    const [id, setId] = useState();
    const [form, setForm] = useState({                  
        name:'',
        email:'',
        phone:'',
    });

    // Desestructuracion de contexto
    const {cart, totalPrice, clearCart } = UseCartContext();

    const factura = {
        form, 
        items: cart.map(data => ({id:data.id, titulo: data.titulo, precio: data.precio, cantidad:data.cantidad})),
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
            <form onSubmit={finishClick}>
                <div className='div-form'>
                    <div className='label'>
                        <label htmlFor='nombre'>Nombre</label>
                    </div>
                    <input className='input-form' type='text' id='nombre' name='name' onChange={changeHandler} value={form.name}/>
                </div>
                <div>
                    <div className='label'>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <input className='input-form' type='text' id='email' name='email' onChange={changeHandler} value={form.email}/>
                </div>
                <div>
                    <div className='label'>
                        <label htmlFor='mensaje'>Telefono</label>
                    </div>
                    <input className='input-form' type='text' id='phone' name='phone' onChange={changeHandler} value={form.phone}/>
                </div>
                <div className='divBtnFrom'>
                    {/* renderizar la app una vez que el cliente envia el formulario */}
                    <button type='submit' className='boton-form'> Enviar </button>
                </div>
            </form>
        </div>
    )
}

export default Form;