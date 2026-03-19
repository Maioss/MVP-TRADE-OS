import { MONEDAS, PRECIOS } from "../data/precios";

function variacionPct(actual, base) {
    const pct = ((actual - base) / base * 100).toFixed(1);
    return pct >= 0 ? `+${pct}%` : `${pct}%`;
}

function PriceHistory({ moneda, setMoneda, periodo }) {
    return (
        <div className="lista-monedas">
            {MONEDAS.map(m => {
                const d = PRECIOS[m.id];
                const base = periodo === 'semana' ? d.semMin : periodo === 'mes' ? d.mesInicio : d.ayer;
                const pct = variacionPct(d.hoy, base);
                const positivo = d.hoy >= base;

                return (
                    <div
                        key={m.id}
                        className={moneda === m.id ? 'moneda-row activa' : 'moneda-row'}
                        onClick={() => setMoneda(m.id)}
                    >
                        <span className="moneda-row-nombre">{m.emoji} {m.nombre}</span>
                        <span className="moneda-row-precio">${d.hoy.toLocaleString()}</span>
                        <span className={positivo ? 'precio-verde' : 'precio-rojo'}>{pct}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default PriceHistory;
