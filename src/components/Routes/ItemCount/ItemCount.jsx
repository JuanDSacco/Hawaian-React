import { useState } from 'react';

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
                <button onClick={botonDisminuir}> - </button>
                <button onClick={botonAumento}> + </button>
                <span>Cantidad: {contador}</span>
            </div>
            <button onClick={agregarProducto}>Añadir al carrito</button>
        </>
    )
}

export default ItemCount;