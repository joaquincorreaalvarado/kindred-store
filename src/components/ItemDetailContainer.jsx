import React from "react";
import { useEffect, useState } from "react";
import arrayGames from "./json/games.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetailContainer= () => {

    const [item, SetItem] = useState([]);
    const {id} = useParams();

    // useEffect(() => {
    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() =>{
    //         resolve(arrayGames.find(item => item.id === parseInt(id)));
    //         }, 2000);
    //     });


    //     promesa.then((data) => {
    //         SetItem(data);
    //     })

    // }, [id]);


    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "Juegos", id);
        getDoc(item).then((kindredProducts) => {
            if (kindredProducts.exists()) {
                SetItem({id:kindredProducts.id, ...kindredProducts.data()});
            } else {
                console.log("El Producto No Existe!");
            }
        });
    }, []);

    return(
        <div className="container">
        <ItemDetail item={item} />
        </div>
    )

}

export default ItemDetailContainer;

