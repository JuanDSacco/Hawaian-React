import { UseCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

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
                <div>
                {
                    cart.map((data,indice) => 
                    <div key={indice}>
                        <div>
                            <span>{data.titulo}</span>
                            <span>Precio ${data.precio}</span>
                            <span>Cantidad: {data.cantidad}</span>
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
                        <span className="precioTotal">Total: ${totalPrice()}</span>
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