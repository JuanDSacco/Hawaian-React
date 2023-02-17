import { useState } from 'react';
import './itemCount.css'

const ItemCount = ({data,onAdd}) => {

    const [contador,setContador] = useState(1);

    const botonAumento = () => {
        setContador(contador + 1);
    };

    const botonDisminuir = () => {
        contador > 0 ? setContador(contador - 1) : setContador(0);
    }

    const agregarProducto = () => {
        onAdd(contador);
    }

    return(
        <>
            <div>
                <button onClick={botonDisminuir} className='botonDisminuir'> - </button>
                <button onClick={botonAumento} className='botonAumento'> + </button>
                <span className='cantidad'>Cantidad: {contador}</span>
            </div>
            <div className='divAñadir'>
            <button onClick={agregarProducto} className='botonAñadir'>Añadir al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;