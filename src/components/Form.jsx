import React, {useContext} from "react";
import { useState } from "react";
import { CartContext } from "./context/cartContext";
import { addDoc, doc, collection, getFirestore, updateDoc } from "firebase/firestore";


const Form = () =>{


    const {cart , Clear, cartFinal } = useContext(CartContext) 
    const [name, setName] = useState ("");
    const [surname, setSurname] = useState ("");  
    const [phone, setPhone] = useState ("");
    const [email, setEmail] = useState ("");
    const [province, setProvince] = useState ("");
    const [city, setCity] = useState ("");
    const [adress, setAdress] = useState ("");
    const [code, setCode] = useState ("");
    const [orderId, setOrderId] = useState("");
    

    const generateOrder = () => {

        const buyDate = new Date();
        const order = {
            buyer:{name:name, surname:surname, phone:phone, email:email, province:province, city:city, adress:adress, code:code},
            items: cart.map(item =>({id:item.id,title:item.name,quantity:item.quantity,price:item.price,total_price:item.quantity*item.price })),
            total:cartFinal(),
            order_date: `${buyDate.getFullYear()}-${buyDate.getMonth() + 1}-${buyDate.getDate()}-${buyDate.getHours()}-${buyDate.getMinutes()}`
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((kindredProducts) => {
            setOrderId(kindredProducts.id);
            const generatedOrder = doc(db, "orders", kindredProducts.id); 
            updateDoc(generatedOrder, {total:order.total * 1.21});

            Clear();
        });
    }

return(
<div className="container" >
 <form action="">
        <h3 className="games">Tus Datos</h3>

    <div className="row">
        <div className="col-12 col-md-8 order-2 order-md-1">
            <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                <label >Nombre</label>
                <input type="text" className="form-control form__input"  name="name" required placeholder="Ingrese su Nombre" onInput={(e) => {setName(e.target.value)}}/>
                </div>
                <div className="col-12 col-sm-6 mb-3" id="group__surname">
                <label>Apellido</label>
                <input type="text" className="form-control form__input" name="surname" required placeholder="Ingrese su Apellido" onInput={(e) => {setSurname(e.target.value)}}/>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                <label>Teléfono</label>
                <input type="text" className="form-control form__input"  name="phone" required placeholder="Ingrese su Teléfono" onInput={(e) => {setPhone(e.target.value)}}/>
                </div>
                <div className="col-12 col-sm-6 mb-3" >
                <label>Email</label>
                <input type="text" className="form-control form__input"  name="email" required placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}}/>
                </div>
            </div>

            <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
        />

            <h3 className="games">Datos del Envio</h3>

            <div>
                <div className="row">
                    <div className="col-12 col-sm-6 mb-3">
                    <label >Provincia</label>
                    <input type="text" className="form-control form__input"  name="province" required placeholder="Ingrese la Provincia" onInput={(e) => {setProvince(e.target.value)}}></input>
                    </div>

                    <div className="col-12 col-sm-6 mb-3">
                        <label>Ciudad</label>
                        <input type="text" className="form-control form__input"  name="city" required placeholder="Ingrese la Ciudad" onInput={(e) => {setCity(e.target.value)}}></input>
                    </div>

                </div>

            <div className="mb-3" >
                <label>Domicilio Completo</label>
                <input type="text" className="form-control form__input"  name="adress" required placeholder="Ingrese el Domicilio Completo" onInput={(e) => {setAdress(e.target.value)}}></input>
            </div>
    

                <div className="col-12 col-sm-4 mb-3" >
                <label>Codigo Postal</label>
                <input type="text" className="form-control form__input"  name="code" required placeholder="Ingrese el Código postal" onInput={(e) => {setCode(e.target.value)}}></input>
                </div>
            </div>
    

            <hr
        style={{
            background: 'black',
            color: 'black',
            borderColor: 'black',
            height: '3px',
        }}
        />
    
            <div className="mb-4">
                    <div>
                        </div>

                <div>
                    <button type="submit"  className="cardButton" onClick={generateOrder}>confirmar pedido</button>
                </div>
            </div>
             
     


      </div>
      <div className="col-12 col-md-4 order-1 order-md-2">
        <h4 className="mb-3 d-flex justify-content-between align-items-center">
          <span className="text-muted price">Tu Carrito</span>
        </h4>
        <table >
        <tbody>
                        {cart.map(item => (
                            <div className="spaceTable" >
                            <tr key={item.id} d-flex >
                                <td><img src={item.image} alt={item.name} width={70} /></td>
                                <td className="align-middle">{item.name}</td>
                                <td className="align-middle" >{item.quantity}</td>
                                <td className="align-middle">${item.quantity *item.price}</td>
                            </tr>
                            </div>
                        ))}
                        <br />

                        <tr>
                      <td className="subTotal text-start">Subtotal ${cartFinal()}</td>
                        </tr>
                        <tr>
                      <td  className="shipping text-start">Envío ${1000}</td>
                        </tr>     
                          
                      </tbody>
                      <br />
                      <tfoot>
                        <tr>
                      <th scope="row" colSpan={15} className="totalBuy text-start">Total: ${cartFinal()+1000}</th>
                        </tr>       
                      </tfoot>
                      </table>
        </div>
        </div>
        <div className="row">
                <div className="col text-center">
                    {orderId !== "" ?  <div className="alert alert-warning" role="alert">La Orden generada es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
  </form>     
    </div>
)


}

export default Form;

