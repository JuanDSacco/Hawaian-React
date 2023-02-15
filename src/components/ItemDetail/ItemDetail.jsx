const ItemDetail = ({data}) => {
    return(
        <>
            <h1>Nombre: {data.strDrink}</h1>
            <img src={data.strDrinkThumb} style={{width:"200px",height:"200px"}} alt='iamgen trago' />
            <h2>Categoria: {data.strCategory}</h2>
            <h3>Alcohol: {data.strAlcoholic}</h3>
            <p>Instrucciones de preparacion: {data.strInstructions}</p>
        </>
    )
}

export default ItemDetail;