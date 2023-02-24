import '../../css/formulario.css'

const Formulario = ({finishClick,changeHandler, form}) => {
    return(
        <form className='container-form' onSubmit={finishClick}>
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
                <div>
                    <div className='label'>
                        <label htmlFor='mensaje'>Mensaje alternativo</label>
                    </div>
                    <textarea className='message-form' cols='30' rows='7' type='text' id='message' name='message' onChange={changeHandler} value={form.message}/>
                </div>
                <div className='divBtnFrom'>
                    <button type='submit' className='boton-form'> Enviar </button>
                </div>
            </form>
    )
}

export default Formulario;