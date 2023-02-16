import NavBar from "../NavBar/NavBar";
import './home.css'
import Index from '../../assets/index.png';
import Footer from "../Footer/Footer";


const Home = () => {
    return(
        <>
            <header>
                <img src={Index} alt="index" className="img_index"/>
                <div className="h1_h2">
                    <h1>Bienvenidos a <span className="span">Hawaian</span></h1>
                    <h2>¡Los tragos más exóticos!</h2>
                    <NavBar/>
                </div>
            </header>
            <Footer className='divFooter'/>
        </>
    )
}

export default Home;