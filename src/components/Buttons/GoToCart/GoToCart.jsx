import '../../../css/goToCart.css'
import { Link } from 'react-router-dom';

const GoToCart = () => {

    return <Link to={`/cart`}><button className='buttonGoToCart'> Ir al carrito </button></Link>
}

export default GoToCart;