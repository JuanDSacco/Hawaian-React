import '../../css/navBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <>
            <nav className='barraNav'>
                <ul style={{display:"flex", justifyContent:"space-evenly",alignItems:"center"}}>
                    <Link to={'/item'}><li className='listaIndiv'>Tragos</li></Link>
                    <Link to={`/contacto`}><li className='listaIndiv'>Contacto</li></Link>
                    <li className='listaIndiv'>Quienes somos</li>
                    <CartWidget/>
                </ul>
                
            </nav>
        </>
    )
}

export default NavBar;



