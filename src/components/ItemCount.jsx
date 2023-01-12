import React, {useEffect, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";



const ItemCount = ({stock, onAdd}) => {

    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [sold, SetSold] = useState (false)

   const decreaseStock = () => {
        if (counter > 1) 
        setCounter(counter - 1);
        
    }

    const  increaseStock = () => {
        if (counter < itemStock) {
        setCounter(counter + 1);
        }
    }

const addCart = (quantity) => {
    if (counter <= itemStock){
        setCounter(1)
        setItemStock (itemStock - quantity)
        SetSold (true)
        onAdd(quantity);

    }
}

useEffect(() =>{
    setItemStock(stock)
},[stock])


return(

    <div>
      <div className="container">
            <div className="btn-group mx-2" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary" onClick={decreaseStock}>-</button>
                <button type="button" className="btn">{counter}</button>
                <button type="button" className="btn btn-outline-secondary" onClick={increaseStock}>+</button>
                {sold ? <Link to={"/cart"} style={{ textDecoration: 'none' }} className="cardButton text-white">Finalizar Compra</Link> : <button type="button" className="cardButton" onClick={() =>{addCart(counter)}}>Agregar</button>} 
            </div>

        </div>
    </div>
)

}

export default ItemCount;