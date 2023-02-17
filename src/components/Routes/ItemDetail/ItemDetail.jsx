import './itemDetail.css'
import { UseCartContext } from "../../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

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
        </div>
    )
}

export default ItemDetail;


