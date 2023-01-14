import React from "react";
import { useParams, Link } from "react-router-dom";

const Purchase= () => {
    const {id} = useParams()

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-secondary" role="alert">
                        <h1>¡Gracias por elegirnos!</h1>
                        <h3>En instantes recibiras un Email con el detalle de la compra.</h3>
                        <p>Tu numero de orden es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} style={{ textDecoration: 'none' }} className="cardButton text-white">Volver a la Pagina Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Purchase;