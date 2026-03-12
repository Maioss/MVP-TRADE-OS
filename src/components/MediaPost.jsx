import { useState } from 'react';

export default function MediaPost() {
    const [texto, setTexto] = useState('');
    const [comentarios, setComentarios] = useState([
        { id: 1, contenido: "Un buen precio, recomiendo comprar." }
    ]);

    const agregarComentario = () => {
        if (texto === '') return;
        const nuevo = { id: Date.now(), contenido: texto };
        setComentarios([nuevo, ...comentarios]);
        setTexto('');
    };

    return (
        <section className="tarjeta">
            <h2 className="titulo-seccion">Foro de Inversores</h2>

            <div className="caja-comentario">
                <textarea
                    placeholder="Deja tu comentario..."
                    value={texto}
                    onChange={(e) => setTexto(e.target.value.slice(0, 280))}
                    className="input-texto"
                />
                <div className="contenedor-boton" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <small>{280 - texto.length} caracteres</small>
                    <button
                        className="boton-accion"
                        onClick={agregarComentario}
                        style={{ width: 'auto' }}
                        disabled={texto === ''}
                    >
                        Publicar
                    </button>
                </div>
            </div>

            <div className="lista-comentarios">
                {comentarios.map((c) => (
                    <div key={c.id} className="item-comentario">
                        <p>{c.contenido}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
