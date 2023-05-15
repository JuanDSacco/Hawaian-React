import '../../css/navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Tragos from '../Buttons/Tragos/Tragos';
import Nosotros from '../Buttons/Nosotros/Nosotros';
import HomeNavBar from '../Buttons/HomeNavBar/HomeNavBar';


const NavBar = () => {
    return(
            <nav className='barraNav'>
                <ul className='ulNavBar'>
                    <HomeNavBar/>
                    <Tragos/>
                    <Nosotros/>
                    <CartWidget/>
                </ul>
            </nav>
    )
}

export default NavBar;



