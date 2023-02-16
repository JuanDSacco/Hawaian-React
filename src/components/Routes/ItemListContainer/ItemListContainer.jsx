import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((res) => setData(res.drinks))
    },[]);

    return <ItemList data={data}/>
}

export default ItemListContainer;