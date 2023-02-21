import '../../../css/eliminarUnidad.css'

const EliminarUnidad = ({removeProduct,eliminarPorUnidad,data}) => {

    return <button className="decrease" disable={data.cantidad <= 0 && removeProduct(data.id)} onClick={() => eliminarPorUnidad (data.id)}>Eliminar unidad -</button>
}

export default EliminarUnidad;