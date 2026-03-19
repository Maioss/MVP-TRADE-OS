import { useState } from "react";

function PremiumModal({ onClose }) {
    const [paso, setPaso] = useState('info');
    const [form, setForm] = useState({ numero: '', nombre: '', vence: '', cvv: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="modal-fondo" onClick={onClose}>
            <div className="modal-caja" onClick={e => e.stopPropagation()}>

                {paso === 'info' && (
                    <>
                        <p className="modal-icono">⭐</p>
                        <h2 className="modal-titulo">Solo para usuarios Premium</h2>
                        <p className="modal-texto">
                            La sección de inversión está disponible únicamente para suscriptores Premium.
                            Accede a análisis avanzados, alertas en tiempo real y más.
                        </p>
                        <button className="boton-accion" onClick={() => setPaso('pago')}>
                            Suscribirse
                        </button>
                        <button className="modal-cerrar-link" onClick={onClose}>
                            Ahora no
                        </button>
                    </>
                )}

                {paso === 'pago' && (
                    <>
                        <p className="modal-icono">💳</p>
                        <h2 className="modal-titulo">Datos de pago</h2>
                        <div className="modal-form">
                            <input
                                className="modal-input"
                                name="numero"
                                placeholder="Número de tarjeta"
                                maxLength={19}
                                value={form.numero}
                                onChange={handleChange}
                            />
                            <input
                                className="modal-input"
                                name="nombre"
                                placeholder="Nombre en la tarjeta"
                                value={form.nombre}
                                onChange={handleChange}
                            />
                            <div className="modal-fila">
                                <input
                                    className="modal-input"
                                    name="vence"
                                    placeholder="MM/AA"
                                    maxLength={5}
                                    value={form.vence}
                                    onChange={handleChange}
                                />
                                <input
                                    className="modal-input"
                                    name="cvv"
                                    placeholder="CVV"
                                    maxLength={3}
                                    value={form.cvv}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="boton-accion" onClick={() => setPaso('error')}>
                                Suscribirse
                            </button>
                            <button className="modal-cerrar-link" onClick={onClose}>
                                Cancelar
                            </button>
                        </div>
                    </>
                )}

                {paso === 'error' && (
                    <>
                        <p className="modal-icono">❌</p>
                        <h2 className="modal-titulo">Error al procesar el pago</h2>
                        <p className="modal-texto">
                            No pudimos completar tu suscripción. Verifica los datos de tu tarjeta e intenta nuevamente.
                        </p>
                        <button className="boton-accion" onClick={() => setPaso('pago')}>
                            Intentar de nuevo
                        </button>
                        <button className="modal-cerrar-link" onClick={onClose}>
                            Cerrar
                        </button>
                    </>
                )}

            </div>
        </div>
    );
}

export default PremiumModal;
