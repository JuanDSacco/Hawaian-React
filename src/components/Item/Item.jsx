import '../../css/item.css'
import VerDetalle from "../Buttons/VerDetalle/VerDetalle";
import Card from "../Card/Card";

const Item = ({data}) => {
    return(
        <>
            <div className='contenedor-carta'>
                <Card data={data}/>
                <div>
                    <VerDetalle data={data}/>
                </div>
            </div>
            <hr style={{margin:'0px'}}/>
        </>
    )
}

export default Item;