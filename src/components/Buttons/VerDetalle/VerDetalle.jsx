import '../../../css/verDetalle.css';
import { Link } from 'react-router-dom';

const VerDetalle = ({data}) => {
    return <Link to={`/item/${data.id}`}><button className='verDetalle'>Ver Detalle</button></Link>
}

export default VerDetalle;