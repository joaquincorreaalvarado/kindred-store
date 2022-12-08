import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1);

   const decreaseStock = () => {
        if (counter > 1) 
        setCounter(counter - 1);
        
    }

    const  increaseStock = () => {
        if (counter < stock) {
        setCounter(counter + 1);
        }
    }

    const onAdd = () => {
        if(stock > 0) {
            toast.success("Agregaste " + counter + " productos al carrito", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

         }

        }

return(

    <div>
      <div className="container">
            <div className="btn-group mx-2" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary" onClick={decreaseStock}>-</button>
                <button type="button" className="btn">{counter}</button>
                <button type="button" className="btn btn-outline-secondary" onClick={increaseStock}>+</button>
                <button type="button" className="cardButton" onClick={onAdd}>Agregar</button> <ToastContainer />
            </div>

        </div>
    </div>
)

}

export default ItemCount;