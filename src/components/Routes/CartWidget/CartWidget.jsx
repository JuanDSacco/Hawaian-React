import Carrito from '../../../assets/cart.png';
import { UseCartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import './cartWidget.css'

const CartWidget = () => {

    // Desestructuracion del contexto
    const { cantidadItem } = UseCartContext();

    return(
        <>
            <Link to={`/cart`}>
                <span className='spanImgCarrito'>{parseInt(cantidadItem())}</span>
                <img src={Carrito} alt={Carrito} className='imgCarrito'/>
            </Link>
        </>
    )
}

export default CartWidget;    