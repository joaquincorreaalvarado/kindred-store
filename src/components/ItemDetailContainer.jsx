import React from "react";
import { useEffect, useState } from "react";
import arrayGames from "./json/games.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer= () => {

    const [item, SetItem] = useState([]);
    const {id} =useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() =>{
            resolve(arrayGames.find(item => item.id === parseInt(id)));
            }, 2000);
        });


        promesa.then((data) => {
            SetItem(data);
        })

    }, [id]);

    return(
        <div className="container">
        <ItemDetail item={item} />
        </div>
    )

}

export default ItemDetailContainer;

