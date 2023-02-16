import Item from "../Item/Item";

const ItemList = ({data}) => {
    return(
        <div>
            {data.map((data) => (
                <Item data={data} key={data.idDrink}/>
            ))}
        </div>
    )
}

export default ItemList;