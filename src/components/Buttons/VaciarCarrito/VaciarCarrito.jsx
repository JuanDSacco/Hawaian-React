import '../../../css/vaciarCarrito.css'

const VaciarCarrito = ({clearCart}) => {

    return <button className="vaciar-carrito" onClick={clearCart}>Vaciar carrito</button>
}

export default VaciarCarrito;