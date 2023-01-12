import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/cartContext";

const CartButton = ({total}) => {

    return(
        <Link to={"/cart"}  className="btn  btn-outline-success position-relative" >
            <img src="/images/Carrito.png" alt="carrito" className="carrito"/> 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
            
        </Link>
    )

}    

    const CartWidget = () => {
        const {cartTotal} = useContext(CartContext);
    
        return cartTotal() > 0 ? <CartButton total={cartTotal()} />  : "";
    }





export default CartWidget;