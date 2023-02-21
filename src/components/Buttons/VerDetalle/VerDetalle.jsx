import '../../../css/verDetalle.css';
import { Link } from 'react-router-dom';

const VerDetalle = ({data}) => {
    return <Link to={`/item/${data.id}`} className='verDetalle'>Ver Detalle</Link>
}

export default VerDetalle;