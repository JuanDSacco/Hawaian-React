import '../../css/itemDetail.css'
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Card from '../Card/Card';
import VolverATragos from '../Buttons/VolverATragos/VolverATragos'
import GoToCart from '../Buttons/GoToCart/GoToCart';

const ItemDetail = ({data}) => {
    // Desestructuracion del contexto
    const { addProduct } = useCartContext();

    const onAdd = ( contador ) => {
        addProduct(data,contador)
    }

    return(
        <div className="container-detalle">
            <Card data={data}/>
            <ItemCount data={data} onAdd={onAdd} />
            <div className='divAñadir'>
                <VolverATragos/>
            </div>
            <div className='divGoToCart'>
                <GoToCart/>
            </div>
        </div>
    )
}

export default ItemDetail;


