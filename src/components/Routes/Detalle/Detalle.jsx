import '../../../css/detalle.css'

const Detalle = () => {
    return(
        <>
        <div className="containerDetalle">
            <p className='pDetalle'>Aprovecho esta sección para comentar características de la App. <br/>
            Inicié la App con create-react-app, utilicé una base de datos de <br/>
            Firebase para obtener los detalles de cada producto y al mismo tiempo <br/>
            para almacenar los detalles de la compra que envía el usuario. Por <br/>
            otro lado, usé Context donde incluí los Hooks y funciones para <br/>
            exportar a cada componente. 
            </p>
        </div>
        </>
    )
}

export default Detalle;