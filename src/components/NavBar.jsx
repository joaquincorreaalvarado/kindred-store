import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <header>
         <nav className="navbar sticky-top navbar-expand-lg navbar navbar-dark bg-dark Menu animate__animated animate__lightSpeedInRight">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <div className="firstTitle animate__animated animate__lightSpeedInRight">
                      <Link to="/" className="firstTitle">Kindred Store</Link> 
                    </div>
                </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="page" to={"/category/Playstation 4"}>playstation 4</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="page" to={"/category/Playstation 5"}>playstation 5</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="page" to={"/category/Switch"}>switch</NavLink>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Categorías
                    </a> */}
                    {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="/playstation4">Playstation 4</a></li>
                      <li><a className="dropdown-item" href="/playstation5">Playstation 5</a></li>
                      <li><a className="dropdown-item" href="/switch">Switch</a></li>
                    </ul> */}
                  {/* </li> */}
                  <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="page" to={"/category/contacto"}>Contacto</NavLink>
                  </li>
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit"><img src={"/images/lupa.png"} alt="lupa" className="lupa"/></button>
                <CartWidget />
              </form>
                
              </div>

            </div>
          </nav>


      </header>
      
      )
    }

    export default NavBar;