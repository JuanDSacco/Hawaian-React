import '../../../css/continuarCompra.css'
import { Link } from 'react-router-dom';

const ContinuarCompra = () => {

    return <Link to={`/form`}><button className="continuar-compra">Continuar</button></Link>
}

export default ContinuarCompra;