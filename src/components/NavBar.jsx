function NavBar({ toggleTema, activo }) {
    return (
        <nav className="barra-navegacion">
            <div className="logo-marca">Trade-Os</div>
            <ul className="enlaces-nav">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#invertir">Invertir</a></li>
                <li>
                    <button
                        className={activo ? "boton-circular encendido" : "boton-circular"}
                        onClick={toggleTema}
                    ></button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;