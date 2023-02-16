import { Link } from "react-router-dom";
import './itemDetail.css'

const ItemDetail = ({data}) => {
    return(
        <div className="containerDetail">
            <img src={data.strDrinkThumb} style={{width:"200px",height:"200px",borderRadius:"50%"}} alt='iamgen trago' />
            <h1>Nombre: <span>{data.strDrink}</span></h1>
            <h2>Categoria: <span>{data.strCategory}</span></h2>
            <h3>Alcohol: <span>{data.strAlcoholic}</span></h3>
            <p>Instrucciones de preparación: <span>{data.strInstructions}</span></p>
            <Link to={`/tragos`} className='buttonDetail'><button>Volver a Tragos</button></Link>
            <Link to={`/`} className='buttonDetail'><button>Volver al inicio</button></Link>
        </div>
    )
}

export default ItemDetail;


