function Card({ titulo, children }) {
  return (
    <section className="tarjeta">
      {titulo && <h2 className="titulo-seccion">{titulo}</h2>}
      {children}
    </section>
  );
}

export default Card;
