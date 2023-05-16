import '../../css/navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Tragos from '../Buttons/Tragos/Tragos';
import Nosotros from '../Buttons/Nosotros/Nosotros';
import HomeNavBar from '../Buttons/HomeNavBar/HomeNavBar';


const NavBar = () => {
    return(
            <nav className='barraNav'>
                <ul className='ulNavBar'>
                    <li className='listaIndiv'><HomeNavBar/></li>
                    <li className='listaIndiv'><Tragos/></li>
                    <li className='listaIndiv'><Nosotros/></li>
                    <li className='listaIndiv'><CartWidget/></li>
                </ul>
            </nav>
    )
}

export default NavBar;



