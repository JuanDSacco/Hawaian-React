import '../../css/navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Tragos from '../Buttons/Tragos/Tragos';
import Nosotros from '../Buttons/Nosotros/Nosotros';
import HomeNavBar from '../Buttons/HomeNavBar/HomeNavBar';


const NavBar = () => {
    return(
            <nav className='barraNav'>
                <ul className='ulNavBar'>
                    <li id='li1NavBar' className='listaIndiv'><HomeNavBar/></li>
                    <li id='li2NavBar' className='listaIndiv'><Tragos/></li>
                    <li id='li3NavBar' className='listaIndiv'><Nosotros/></li>
                    <li id='li4NavBar' className='listaIndiv'><CartWidget/></li>
                </ul>
            </nav>
    )
}

export default NavBar;



