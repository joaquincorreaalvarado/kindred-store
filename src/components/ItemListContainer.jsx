import React, { useEffect, useState } from "react";
import arrayGames from "./json/games.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import { addDoc, collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = () => {
    const [items, SetItems] = useState([]);
    const {id} = useParams();

    // useEffect(() => {
    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() =>{
    //         resolve(id ? arrayGames.filter(item => item.console === id) : arrayGames);
    //         }, 2000);
    //     });


    //     promesa.then((data) => {
    //         SetItems(data);
    //     })

    // }, [id]);

    useEffect(() => {
        const db = getFirestore();
        const gamesCollection = collection(db, "Juegos");
        //const q = query(itemsCollection, where("precio", "<", 1000), limit(3)); //Consulta de Filtrado
        
        // En caso de tener ID, filtro los Productos por ID, sino traigo la collection completa
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

