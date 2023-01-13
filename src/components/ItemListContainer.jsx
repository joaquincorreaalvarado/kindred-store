import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import {  collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = () => {
    const [items, SetItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const gamesCollection = collection(db, "Juegos");
        const q = id ? query(gamesCollection, where("console", "==", id)) : gamesCollection;
        
        getDocs(q).then((kindredProducts) => {
            SetItems(kindredProducts.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ))
        });
    }, [id]);

    return(
        <div>
            <Carrousel />
            <div className="container">
             <ItemList items={items}/> 
            </div>

        </div>
    )
}

export default ItemListContainer; 

