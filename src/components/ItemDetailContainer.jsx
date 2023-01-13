import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetailContainer= () => {

    const [item, SetItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "Juegos", id);
        getDoc(item).then((kindredProducts) => {
            if (kindredProducts.exists()) {
                SetItem({id:kindredProducts.id, ...kindredProducts.data()});
            } else {
            }
        });
    },[id]);

    return(
        <div className="container">
        <ItemDetail item={item} />
        </div>
    )

}

export default ItemDetailContainer;

