import './navBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../Routes/CartWidget/CartWidget';

const NavBar = () => {
    return(
        <>
            <nav className='barraNav'>
                <ul style={{display:"flex", justifyContent:"space-evenly",alignItems:"center"}}>
                    <Link to={'/item'}><li className='listaIndiv'>Tragos</li></Link>
                    <li className='listaIndiv'>Contacto</li>
                    <li className='listaIndiv'>Quienes somos</li>
                    <CartWidget/>
                </ul>
                
            </nav>
        </>
    )
}

export default NavBar;



