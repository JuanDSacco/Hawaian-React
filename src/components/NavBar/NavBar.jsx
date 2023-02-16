import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <>
            <nav>
                <ul style={{display:"flex", justifyContent:"space-between"}}>
                    <Link to={'/tragos'}><li className='listaIndiv'>Tragos</li></Link>
                    <li className='listaIndiv'>Contacto</li>
                    <li className='listaIndiv'>Quienes somos</li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;



