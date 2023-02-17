import { UseCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import './cart.css'

const Cart = () => {
    //desestructuracion del contexto, aca colocamos solo las funciones y estados que vayamos a utilizar en el componente.
    const { totalPrice, clearCart, removeProduct, eliminarPorUnidad, cart } = UseCartContext();

    return(
        <>
            {
                cart.length === 0 ?
                // creo la visualizacion del carrito en estado vacio
                <div>
                    <h2>El carrito se encuetra vacio</h2>
                </div>
                : 
                <div className="cartContainer">
                {
                    cart.map((data,indice) => 
                    <div key={indice}>
                        <div className="cartContainer2">
                            <h1>{data.titulo}</h1>
                            <img src={data.imagen} alt='imagen coctail' className='foto-cocktail'/>
                            <h2>Precio ${data.precio}</h2>
                            <h3 className="cantidad">Cantidad: {data.cantidad}</h3>
                            <div>
                                <button className="decrease" disable={data.cantidad <= 0 && removeProduct(data.id)} onClick={() => eliminarPorUnidad (data.id)}>Eliminar unidad -</button>
                            </div>
                        </div>
                    </div>
                    )
                    
                }
                    <div>
                        <button className="vaciar-carrito" onClick={clearCart}>Vaciar carrito</button>
                    </div>
                    <div>
                        <h2 className="precioTotal">Total: ${totalPrice()}</h2>
                    </div>
                    <div>
                        <Link to={`/form`}><button className="continuar-compra">Continuar</button></Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart;