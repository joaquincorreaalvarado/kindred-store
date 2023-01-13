import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import {  collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = () => {
    const [items, SetItems] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const gamesCollection = collection(db, "Juegos");
        const q = id ? query(gamesCollection, where("console", "==", id)) : gamesCollection;
        
        getDocs(q).then((kindredProducts) => {
            SetItems(kindredProducts.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ))
            setLoading(false)
        });
    }, [id]);

    return(
        <div>
            <Carrousel />
            <div className="container">
             {loading ? <Loading /> : <ItemList items={items}/>}
            </div>

        </div>
    )
}

export default ItemListContainer; 

