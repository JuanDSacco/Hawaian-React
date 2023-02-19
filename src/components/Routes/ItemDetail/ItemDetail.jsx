import './itemDetail.css'
import { UseCartContext } from "../../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {
    // Desestructuracion del contexto
    const { addProduct } = UseCartContext();

    const onAdd = ( contador ) => {
        addProduct(data,contador)
    }

    return(
        <div className="container-detalle">
            <h1>{data.titulo}</h1>
            <img src={data.imagen} alt='foto cocktail' className='foto-cocktail'/>
            <h2>Precio ${data.precio}</h2>
            <ItemCount data={data} onAdd={onAdd} />
            <div className='divAñadir'>
                <Link to={`/item`}><button className='volverATragos'> Volver a la lista de tragos </button></Link>
            </div>
            <div className='divGoToCart'>
                <Link to={`/cart`}><button className='buttonGoToCart'> Ir al carrito </button></Link>
            </div>
        </div>
    )
}

export default ItemDetail;


