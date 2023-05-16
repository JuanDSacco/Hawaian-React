import '../../css/itemCount.css'
import Disminuir from '../Buttons/Disminuir/Disminuir';
import Aumento from '../Buttons/Aumento/Aumento';
import AgregarProducto from '../Buttons/AgregarProducto/AgregarProducto';
import { useState } from 'react';

const ItemCount = ({onAdd}) => {

    const [contador,setContador] = useState(1);

        const botonAumento = () => {
            setContador(contador + 1);
        };                                              
    
        const botonDisminuir = () => {
            contador > 0 ? setContador(contador - 1) : setContador(0);
        }

        const agregarProducto = () => {
            onAdd(contador);
            alert('Se añadó al carrito');
        }

    return(
        <>
            <div>
                <Disminuir botonDisminuir={botonDisminuir}/>
                <Aumento botonAumento={botonAumento}/>
                <span className='cantidad'>Cantidad: {contador}</span>
            </div>
            <div className='divAñadir'>
                <AgregarProducto agregarProducto={agregarProducto}/>
            </div>
        </>
    )
}

export default ItemCount;