import { useState } from 'react';

const cartItems = [
    { id: 1, nombre: 'Bitcoin (BTC)',    precio: 33575 },
    { id: 2, nombre: 'Ethereum (ETH)',   precio: 1840  },
    { id: 3, nombre: 'CrikoCoin (CRKO)', precio: 0.20  },
];

export default function ShoppingCart() {
    const [pagado, setPagado] = useState(false);

    const total = cartItems.reduce((acc, item) => acc + item.precio, 0);

    if (pagado) {
        return (
            <section className="tarjeta">
                <h2 className="titulo-seccion">Orden de Compra</h2>
                <p>✅ ¡Pago realizado con éxito!</p>
            </section>
        );
    }

    return (
        <section className="tarjeta">
            <h2 className="titulo-seccion">Orden de Compra</h2>
            <p>Total a pagar: <strong>${total.toLocaleString()} USD</strong></p>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>{item.nombre} - ${item.precio.toLocaleString()} USD</li>
                ))}
            </ul>
            <button className="boton-accion" onClick={() => setPagado(true)}>
                Pagar
            </button>
        </section>
    );
}
