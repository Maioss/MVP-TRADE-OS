import { useState } from "react";
import NavBar from "./components/NavBar";
import FooterP from "./components/Footer";
import MediaPost from "./components/MediaPost";
import BitcoinPrice from "./components/BitcoinPrice";
import PriceHistory from "./components/PriceHistory";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

function App() {
  const [modoClaro, setModoClaro] = useState(false);

  return (
    <div className={modoClaro ? "contenedor-principal modo-claro" : "contenedor-principal"}>
      <NavBar toggleTema={() => setModoClaro(!modoClaro)} activo={modoClaro} />

      <main className="contenido">
        <div className="cuadricula">
          <BitcoinPrice />
          <PriceHistory />
        </div>

        <MediaPost />
        <ShoppingCart />
      </main>

      <FooterP />
    </div>
  );
}

export default App;
