import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer
        greeting={
          "¡Bienvenidos a Kindred Store, el mejor sitio de venta de videojuegos!"
        }
      />
    </div>
  );
}

export default App;
