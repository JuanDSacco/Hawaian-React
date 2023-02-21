import '../../css/navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Tragos from '../Buttons/Tragos/Tragos';
import Contact from '../Buttons/Contact/Contact';
import Nosotros from '../Buttons/Nosotros/Nosotros';


const NavBar = () => {
    return(
        <>
            <nav className='barraNav'>
                <ul style={{display:"flex", justifyContent:"space-evenly",alignItems:"center"}}>
                    <Tragos/>
                    <Contact/>
                    <Nosotros/>
                    <CartWidget/>
                </ul>
                
            </nav>
        </>
    )
}

export default NavBar;



