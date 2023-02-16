import { useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    const [ data, setData ] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((data) => setData(data.drinks.find((item) => item.idDrink === (id))))
    },[id]);

    return <ItemDetail data={data} />
}

export default ItemDetailContainer;