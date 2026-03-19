import { useState } from "react";
import Button from "./Button";
import { MONEDAS, PRECIOS } from "../data/precios";

const PERIODOS = [
    { id: 'hoy',    label: 'Hoy'    },
    { id: 'semana', label: 'Semana' },
    { id: 'mes',    label: 'Mes'    },
];

const ajustesIniciales = { BTC: 0, ETH: 0, DOGE: 0, CRKO: 0 };

function BitcoinPrice({ moneda, periodo, setPeriodo }) {
    const [ajustes, setAjustes] = useState(ajustesIniciales);

    const m = MONEDAS.find(m => m.id === moneda);
    const precio = PRECIOS[moneda].hoy + ajustes[moneda];

    const actualizar = () => {
        const variacion = Math.floor(Math.random() * 1000) - 500;
        const nuevoPrecio = Math.max(PRECIOS[moneda].hoy + ajustes[moneda] + variacion, 0.01);
        setAjustes({ ...ajustes, [moneda]: nuevoPrecio - PRECIOS[moneda].hoy });
    };

    return (
        <div className="panel-precio">
            <div className="selector-grupo">
                {PERIODOS.map(p => (
                    <button
                        key={p.id}
                        className={periodo === p.id ? "btn-selector activo" : "btn-selector"}
                        onClick={() => setPeriodo(p.id)}
                    >
                        {p.label}
                    </button>
                ))}
            </div>
            <p className="texto-precio" key={moneda}>
                {m.emoji} <strong>${precio.toLocaleString()}</strong> <span className="precio-tag">{m.id}</span>
            </p>
            <Button texto="Actualizar" onClick={actualizar} variante="outline" />
        </div>
    );
}

export default BitcoinPrice;
