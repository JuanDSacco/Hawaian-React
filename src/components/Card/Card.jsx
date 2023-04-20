import '../../css/card.css'

const Card = ({data}) => {
    return(
        <div>
            <h1 className="h1Carta">{data.titulo}</h1>
            <img src={data.imagen} alt='foto-cocktail' className="foto-cocktail"/>
            <h2 className="h2Carta">Precio ${data.precio}</h2>
        </div>
    )
}

export default Card;