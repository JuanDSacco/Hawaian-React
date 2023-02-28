import Carrito from '../../assets/cart.png';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import '../../css/cartWidget.css'

const CartWidget = () => {

    // Desestructuracion del contexto
    const { cantidadItem } = useCartContext();

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