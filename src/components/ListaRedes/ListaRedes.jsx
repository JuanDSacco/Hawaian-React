import '../../css/listaRedes.css'

const ListaRedes = () => {
    return(
        <div>
            <ul style={{display:"flex",justifyContent:"center"}}>
                <li className='listaRedes'><i class="fa-brands fa-facebook"></i></li>
                <li className='listaRedes'><i class="fa-brands fa-instagram"></i></li>
                <li className='listaRedes'><i class="fa-brands fa-whatsapp"></i></li>
                <li className='listaRedes'><i class="fa-brands fa-twitter"></i></li>
            </ul>
        </div>
    )
}

export default ListaRedes;