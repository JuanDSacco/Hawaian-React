import '../../css/navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Tragos from '../Buttons/Tragos/Tragos';
import Contact from '../Buttons/Contact/Contact';
import Nosotros from '../Buttons/Nosotros/Nosotros';
import HomeNavBar from '../Buttons/HomeNavBar/HomeNavBar';


const NavBar = () => {
    return(
            <nav className='barraNav'>
                <ul style={{display:"flex", justifyContent:"space-evenly",alignItems:"center", margin:'0px'}}>
                    <HomeNavBar/>
                    <Tragos/>
                    <Contact/>
                    <Nosotros/>
                    <CartWidget/>
                </ul>
            </nav>
    )
}

export default NavBar;



