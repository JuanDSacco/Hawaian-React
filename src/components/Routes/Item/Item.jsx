import { Link } from "react-router-dom";
import './item.css'

const Item = ({data}) => {
    return(
        <>
            <div className='contenedor-carta'>
                <h1>{data.titulo}</h1>
                <h2>{data.precio}</h2>
                <img src={data.imagen} alt='foto cocktail'/>
                <div>
                    <Link to={`/tragos/${data.id}`}>Ver Detalle</Link>
                </div>
            </div>
        </>
    )
}

export default Item;