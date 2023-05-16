import { useCartContext } from "../../../context/CartContext";
import '../../../css/cart.css'
import MapCart from "../../MapCart/MapCart";
import VolverATragos from '../../Buttons/VolverATragos/VolverATragos';

const Cart = () => {
    //desestructuracion del contexto, aca colocamos solo las funciones y estados que vayamos a utilizar en el componente.
    const { totalPrice, clearCart, removeProduct, eliminarPorUnidad, cart } = useCartContext();

    return(
        <>
            {
                cart.length === 0 ?
                // creo la visualizacion del carrito en estado vacio
                <div className="cartVacio">
                    <h2 className="h2CartEmpty">¡El carrito se encuetra vacío!</h2>
                    <VolverATragos/>
                </div>
                : 
                <MapCart totalPrice={totalPrice} clearCart={clearCart} removeProduct={removeProduct} eliminarPorUnidad={eliminarPorUnidad} cart={cart}/>
            }
        </>
    )
}

export default Cart;