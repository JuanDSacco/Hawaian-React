import { getDirestore, addDoc, collection, getFirestore } from 'firebase/firestore';
import { UseCartContext } from '../../context/CartContext';
import { useState } from 'react';

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
                .addDoc(userCollection, factura)
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
                    <label htmlFor='nombre'>Nombre</label>
                    <input className='input-form' type='text' id='nombre' name='name' onChange={changeHandler} value={form.name}/>
                </div>
                <div>
                    <label htmlFor='email'>email</label>
                    <input className='input-form' type='text' id='email' name='email' onChange={changeHandler} value={form.email}/>
                </div>
                <div>
                    <label htmlFor='mensaje'>Telefono</label>
                    <input className='input-form' type='text' id='Telefono' name='Telefono' onChange={changeHandler} value={form.phone}/>
                </div>
                <div>
                    <button type='submit' className='boton-form'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;