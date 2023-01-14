import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetailContainer= () => {

    const [item, SetItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "Juegos", id);
        getDoc(item).then((kindredProducts) => {
            if (kindredProducts.exists()) {
                SetItem({id:kindredProducts.id, ...kindredProducts.data()});
                setLoading(false)
            } else {
            }
        });
    },[id]);

    return(
        <div className="container">
        {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )

}

export default ItemDetailContainer;

