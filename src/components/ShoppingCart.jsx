import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import { MONEDAS, PRECIOS } from '../data/precios';

export default function ShoppingCart() {
    const [monedaId, setMonedaId] = useState(MONEDAS[0].id);
    const [cantidad, setCantidad] = useState(1);
    const [carrito, setCarrito] = useState([]);
    const [pagado, setPagado] = useState(false);

    const moneda = MONEDAS.find(m => m.id === monedaId);
    const precioUnitario = PRECIOS[monedaId].hoy;
    const total = carrito.reduce((acc, item) => acc + item.subtotal, 0);

    const agregarAlCarrito = () => {
        const existe = carrito.find(item => item.id === monedaId);
        if (existe) {
            setCarrito(carrito.map(item =>
                item.id === monedaId
                    ? { ...item, cantidad: item.cantidad + cantidad, subtotal: (item.cantidad + cantidad) * item.precio }
                    : item
            ));
        } else {
            setCarrito([...carrito, { ...moneda, precio: precioUnitario, cantidad, subtotal: cantidad * precioUnitario }]);
        }
        setCantidad(1);
    };

    const eliminarItem = id => setCarrito(carrito.filter(item => item.id !== id));

    const reiniciar = () => {
        setCarrito([]);
        setPagado(false);
        setCantidad(1);
        setMonedaId(MONEDAS[0].id);
    };

    if (pagado) {
        return (
            <Card titulo="Pedido">
                <div className="pago-exito">
                    <p className="pago-emoji">✅</p>
                    <p className="pago-titulo">¡Pago realizado con éxito!</p>
                    <p className="pago-total">Total pagado: <strong>${total.toLocaleString()} USD</strong></p>
                    <Button texto="Nueva orden" onClick={reiniciar} variante="secundario" />
                </div>
            </Card>
        );
    }

    return (
        <Card titulo="Pedido">
            <div className="cart-selector">
                <label className="cart-label">Moneda</label>
                <div className="moneda-opciones">
                    {MONEDAS.map(m => (
                        <button
                            key={m.id}
                            className={`moneda-btn${monedaId === m.id ? ' activa' : ''}`}
                            onClick={() => setMonedaId(m.id)}
                        >
                            {m.emoji} {m.nombre}
                        </button>
                    ))}
                </div>
            </div>

            <p className="precio-unitario">
                Precio unitario: <strong>${precioUnitario.toLocaleString()} USD</strong>
            </p>

            <div className="cart-selector">
                <label className="cart-label">Cantidad</label>
                <div className="cantidad-control">
                    <button className="cantidad-btn" onClick={() => setCantidad(Math.max(1, cantidad - 1))}>−</button>
                    <span className="cantidad-numero">{cantidad}</span>
                    <button className="cantidad-btn" onClick={() => setCantidad(cantidad + 1)}>+</button>
                </div>
                <p className="subtotal-linea">
                    Subtotal: <strong>${(cantidad * precioUnitario).toLocaleString()} USD</strong>
                </p>
            </div>

            <Button texto="Agregar al carrito" onClick={agregarAlCarrito} />

            {carrito.length > 0 && (
                <div className="resumen-carrito">
                    <h3 className="cart-subtitulo">Tu carrito</h3>
                    <ul className="cart-list">
                        {carrito.map(item => (
                            <li key={item.id} className="cart-item">
                                <span>{item.emoji} {item.nombre} × {item.cantidad}</span>
                                <span className="cart-item-precio">${item.subtotal.toLocaleString()} USD</span>
                                <button className="btn-eliminar" onClick={() => eliminarItem(item.id)}>✕</button>
                            </li>
                        ))}
                    </ul>
                    <p className="cart-total">Total: <strong>${total.toLocaleString()} USD</strong></p>
                    <Button texto="Confirmar pago" onClick={() => setPagado(true)} />
                </div>
            )}
        </Card>
    );
}
