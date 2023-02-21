import '../../../css/volverATragos.css'
import { Link } from 'react-router-dom';

const VolverATragos = () => {

    return <Link to={`/item`}><button className='volverATragos'> Volver a la lista de tragos </button></Link>
}

export default VolverATragos;
