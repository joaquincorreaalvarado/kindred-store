import React from "react";
import { useContext } from "react";
import { CartContext } from "./context/cartContext";
import { Link } from "react-router-dom";


const Cart = () => {

    const {cart , cartTotal, removeItem, Clear, cartFinal } = useContext(CartContext)

    if (cartTotal() === 0) {
        return (
            <div className="container">

                <div className="jumbotron">
        <h2>Aún no hay items en el carrito!</h2>
        <p>Continuá eligiendo productos desde aquí:</p>
        <a  href="/" type="submit" className="btn btn-outline-dark btn-lg">Seguir Navegando</a>
        </div>

            </div>
        )
    }


    return(

        <div className="container" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
        <h2>Mi Carrito</h2>
        <br />
      <div className="modal-content">
          <div className="modal-header">
          </div>
          <div className="modal-body">
              <div className="container">
                  <table className="table table-sm">
                      <thead className="table-dark" >
                          <tr>
                            <th scope="col">Imagen</th>  
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Total</th>
                            <th scope="col">Accion</th>
                          </tr>
                      </thead>
                    
                      <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td><img src={item.image} alt={item.name} width={110} /></td>
                                <td className="align-middle">{item.name}</td>
                                <td className="align-middle">{item.quantity}</td>
                                <td className="align-middle">${item.price}</td>
                                <td className="align-middle">${item.quantity *item.price}</td>
                                <td className="align-middle"><Link onClick={() => {removeItem(item.id)}}><img src="../images/basura.png" alt="basura"></img></Link></td>
                            </tr>

                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                      <th scope="row" colSpan={5} className="totalCart">Total de la compra: ${cartFinal()}</th>
                        </tr>       
                      </tfoot>
                      </table>
                  <div className="row" id="cards"></div>
              </div>
          

          
          </div>


          <div className="modal-footer">

        <div>
            
          <button type="submit" onClick={Clear} className="btn btn-danger btn-lg"> Vaciar el Carrito</button>
          <button type="submit"  className="btn  btn-lg "> 
            <Link to={"/form"} style={{ textDecoration: 'none' }}  className="cardButton text-white">Terminar Compra</Link>
            </button>
          </div>
          </div>
      </div>
  </div>
  <br />
  <br />
  <br />
  <br />
</div>
    )

}

export default Cart;