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
            <h2>{data.titulo}</h2>
            <img src={data.imagen} alt='foto cocktail' />
            <h3>Precio ${data.precio}</h3>
            <ItemCount data={data} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail;


