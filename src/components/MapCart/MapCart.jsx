import '../../css/mapCart.css'
import Card from '../Card/Card';
import EliminarUnidad from '../Buttons/EliminarUnidad/EliminarUnidad';
import VaciarCarrito from '../Buttons/VaciarCarrito/VaciarCarrito';
import ContinuarCompra from '../Buttons/ContinuarCompra/ContinuarCompra';

const MapCart = ({cart, removeProduct, eliminarPorUnidad, clearCart, totalPrice}) => {
    return(
        <div className="cartContainer">
            {
            cart.map((data,indice) => 
                <div key={indice}>
                    <div className="cartContainer2">
                        <Card data={data}/>
                        <div style={{display:"flex",paddingBottom:"10px"}}>                                       
                            <EliminarUnidad removeProduct={removeProduct} eliminarPorUnidad={eliminarPorUnidad} data={data}/>
                            <h3 className="cantidad">Unidades: {data.cantidad}</h3> 
                        </div>
                    </div>
                </div>
                )
            }
            <div>
                <VaciarCarrito clearCart={clearCart}/>
            </div>
            <div>
                <h2 className="precioTotal">Total = ${totalPrice()}</h2>
            </div>
            <div>
                <ContinuarCompra/>
            </div>
        </div>
    )
}

export default MapCart;