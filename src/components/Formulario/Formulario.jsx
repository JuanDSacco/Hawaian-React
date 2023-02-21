import '../../css/formulario.css'

const Formulario = ({finishClick,changeHandler, form}) => {
    return(
        <form onSubmit={finishClick}>
                <div className='div-form'>
                    <div className='label'>
                        <label htmlFor='nombre'>Nombre</label>
                    </div>
                    <input className='input-form' type='text' id='nombre' name='name' onChange={changeHandler} value={form.name}/>
                </div>
                <div>
                    <div className='label'>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <input className='input-form' type='text' id='email' name='email' onChange={changeHandler} value={form.email}/>
                </div>
                <div>
                    <div className='label'>
                        <label htmlFor='mensaje'>Telefono</label>
                    </div>
                    <input className='input-form' type='text' id='phone' name='phone' onChange={changeHandler} value={form.phone}/>
                </div>
                <div className='divBtnFrom'>
                    {/* renderizar la app una vez que el cliente envia el formulario */}
                    <button type='submit' className='boton-form'> Enviar </button>
                </div>
            </form>
    )
}

export default Formulario;