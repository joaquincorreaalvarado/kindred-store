import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(

        <div className="col-md-3">

            <Link to={"/item/" + item.id} className="text-dark text-decoration-none">

                <div className="card cardSize">
                    <div className="card-body">
                        <img src={item.image} className="card-img-top img-fluid gamesImage" alt={item.name}></img>
                        <div>
                            <p className="card-text gamesList">{item.name}</p>
                            <p className="card-text gamesList">Precio: ${item.price}</p>
                        <div>
                            <button  className="cardButton">Agregar</button>
                        </div>    
                        </div>
                    </div>

                </div>

            </Link> 

        </div>
    )
}

export default Item; 