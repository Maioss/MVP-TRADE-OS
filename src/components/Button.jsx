function Button({ texto, onClick, disabled, variante }) {
  let clase = "boton-accion";
  if (variante === "secundario") clase += " boton-secundario";
  if (variante === "outline") clase += " boton-outline";

  return (
    <button className={clase} onClick={onClick} disabled={disabled}>
      {texto}
    </button>
  );
}

export default Button;
