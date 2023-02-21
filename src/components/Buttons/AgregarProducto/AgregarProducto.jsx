import '../../../css/agregarProducto.css'

const AgregarProducto = ({agregarProducto}) => {

    return <button onClick={agregarProducto} className='botonAñadir'>Añadir al carrito</button>
}

export default AgregarProducto;