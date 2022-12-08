import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail= ({item}) => {

    return(
        <div className="row">
        <div className="col-md-4">
            <img src={item.image} alt={item.name} className="img-fluid" width="400" />
        </div>
        <div className="col-md-5">
            <p className="gamesDetail">{item.name}</p>
            <p className="consoleGame">{item.console}</p>
            <p>{item.detail}</p>
            <p><b>Precio: ${item.price}</b></p>
            <p className="itemCount"><ItemCount stock={item.stock}/></p>
        </div>
    </div>
    )

}

export default ItemDetail;


