import React, { useEffect, useState } from "react";
import arrayGames from "./json/games.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, SetItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() =>{
            resolve(id ? arrayGames.filter(item => item.console === id) : arrayGames);
            }, 2000);
        });


        promesa.then((data) => {
            SetItems(data);
        })

    }, [id]);

    return(
        <div>
            <div className="container">
             <ItemList items={items}/> 
            </div>

        </div>
    )
}

export default ItemListContainer; 

