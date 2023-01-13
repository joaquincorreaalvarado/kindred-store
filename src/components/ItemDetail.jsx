import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import {CartContext} from "./context/cartContext";


const ItemDetail= ({item}) => {

const {addItem} = useContext(CartContext)    
const [itemStock , setItemStock] = useState (0)

const onAdd = (quantity) => {
    setItemStock(itemStock - quantity)
    addItem(item, quantity);

}    


useEffect(() => {
    setItemStock(item.stock);
}, [item]);    


    return(
        <div className="row">
        <div className="col-md-4">
            <img src={item.image} alt={item.name} className="img-fluid" width="400" />
        </div>
        <div className="col-md-5">
            <span className="gamesDetail">{item.name}</span>
            <span className="consoleGame">{item.console}</span>
            <span>{item.detail}</span>
            <span><b>Precio: ${item.price}</b></span>
            <span className="itemCount"><ItemCount stock={item.stock} onAdd={onAdd}/></span>
        </div>
    </div>
    )

}

export default ItemDetail;


