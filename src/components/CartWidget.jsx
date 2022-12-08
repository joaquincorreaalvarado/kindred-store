import React from "react";

const CartWidget = () => {

    return(
        <button type="button" className="btn  btn-outline-success position-relative" >
            <img src="/images/Carrito.png" alt="carrito" className="carrito"/> 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )

}


export default CartWidget;