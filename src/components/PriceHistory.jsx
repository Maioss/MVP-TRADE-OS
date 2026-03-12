function PriceHistory() {
    return (
        <section className="tarjeta">
            <h2 className="titulo-seccion">Histórico</h2>
            <table className="tabla-precios">
                <thead>
                    <tr>
                        <th>Hoy</th>
                        <th>Ayer</th>
                        <th>Mes anterior</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>67.151,69 $</td>
                        <td>65.151,69 $</td>
                        <td>69.151,69 $</td>
                    </tr>
                </tbody>
            </table>
            <div className="contenedor-link">
                <a href="#detalles">Ver más detalles</a>
            </div>
        </section>
    );
}

export default PriceHistory;
