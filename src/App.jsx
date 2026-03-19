import { useState } from "react";
import NavBar from "./components/NavBar";
import FooterP from "./components/Footer";
import MediaPost from "./components/MediaPost";
import BitcoinPrice from "./components/BitcoinPrice";
import PriceHistory from "./components/PriceHistory";
import ShoppingCart from "./components/ShoppingCart";
import PremiumModal from "./components/PremiumModal";
import "./App.css";

function App() {
  const [modoClaro, setModoClaro] = useState(false);
  const [moneda, setMoneda] = useState('BTC');
  const [periodo, setPeriodo] = useState('hoy');
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div className={modoClaro ? "contenedor-principal modo-claro" : "contenedor-principal"}>
      <NavBar
        toggleTema={() => setModoClaro(!modoClaro)}
        activo={modoClaro}
        onInvertir={() => setModalAbierto(true)}
      />

      {modalAbierto && <PremiumModal onClose={() => setModalAbierto(false)} />}

      <main className="contenido">
        <div className="layout-principal">
          <aside className="panel-lateral">
            <BitcoinPrice moneda={moneda} periodo={periodo} setPeriodo={setPeriodo} />
            <PriceHistory moneda={moneda} setMoneda={setMoneda} periodo={periodo} />
          </aside>
          <div className="columna-tarjetas">
            <ShoppingCart />
            <MediaPost />
          </div>
        </div>
      </main>

      <FooterP />
    </div>
  );
}

export default App;
