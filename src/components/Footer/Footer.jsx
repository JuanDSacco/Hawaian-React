import '../../css/footer.css'

const Footer = () => {
    return(
        <div className='footerContainer'>
            <div className='divContUbi'>
                <div className='contacto'>
                    <h3 className='h3Contacto'>Contactanos</h3>
                    <ul>
                        <li className='listaDatos'>Numero: +54 11 3432 5690</li>
                        <li className='listaDatos'>Email: hawaiancocktail@gmail.com</li>
                        <li className='listaDatos'>Direccion: Av. 9 de Julio 2680</li>
                        <div>
                            <ul style={{display:"flex",justifyContent:"center"}}>
                                <li className='listaRedes'><i class="fa-brands fa-facebook"></i></li>
                                <li className='listaRedes'><i class="fa-brands fa-instagram"></i></li>
                                <li className='listaRedes'><i class="fa-brands fa-whatsapp"></i></li>
                                <li className='listaRedes'><i class="fa-brands fa-twitter"></i></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='divDerechos'>
            <h5>Todos los derechos reservados por Copyright</h5>
            </div>
        </div>
    )
}

export default Footer;