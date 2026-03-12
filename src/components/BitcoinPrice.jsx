import { useState } from "react";

function BitcoinPrice() {
    const [precio, setPrecio] = useState(67151);

    const actualizarPrecio = () => {
        const variacion = Math.floor(Math.random() * 1000) - 500;
        setPrecio(precio + variacion);
    };

    return (
        <section className="tarjeta">
            <h2 className="titulo-seccion">BITCOIN HOY:</h2>
            <p className="texto-precio">
                <strong>$ {precio} USD</strong>
            </p>
            <button className="boton-accion" onClick={actualizarPrecio}>
                Actualizar Precio
            </button>
        </section>
    );
}

export default BitcoinPrice;
