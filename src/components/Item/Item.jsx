import { Link } from "react-router-dom";
import '../../css/item.css'

const Item = ({data}) => {
    return(
        <>
            <div className='contenedor-carta'>
                <h1 className="h1Carta">{data.titulo}</h1>
                <img src={data.imagen} alt='foto-cocktail' className="foto-cocktail"/>
                <h2 className="h2Carta">Precio ${data.precio}</h2>
                <div>
                    <Link to={`/item/${data.id}`} className='verDetalle'>Ver Detalle</Link>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default Item;