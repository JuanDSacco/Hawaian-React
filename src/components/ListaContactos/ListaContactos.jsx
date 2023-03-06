import ListaRedes from "../ListaRedes/ListaRedes";
import '../../css/listaContactos.css'

const ListaContactos = () => {
    return(
        <div className='footerContainer'>
            <div className='divContUbi'>
                <div>
                    <h3 className='h3Contacto'>Contactanos</h3>
                    <ul>
                        <li className='listaDatos'>Numero: +54 11 3432 5690</li>
                        <li className='listaDatos'>Email: hawaiancocktail@gmail.com</li>
                        <li className='listaDatos'>Direccion: Av. 9 de Julio 2680</li>
                        <ListaRedes/>
                    </ul>
                </div>
            </div>
            <div className='divDerechos'>
            <h5>Todos los derechos reservados por Copyright 2023</h5>
            </div>
        </div>
    )
}

export default ListaContactos;