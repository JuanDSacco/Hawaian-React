import { Link } from "react-router-dom";
import './item.css'

const Item = ({data}) => {
    return(
        <>
            <div className="container">
                <div className="div1">
                    <h1>Nombre: <span>{data.strDrink}</span></h1>
                    <h2>Categoría: <span>{data.strCategory}</span></h2>
                    <Link to={`/tragos/${data.idDrink}`}><button>Ver detalles</button></Link>
                    <Link to={`/`}><button>Volver al inicio</button></Link>
                </div>
                <div className="div2">
                    <img src={data.strDrinkThumb} alt='imagen trago' style={{width:"250px",height:"250px",borderRadius:"50%"}}/>
                </div>
            </div>
        </>
    )
}

export default Item;