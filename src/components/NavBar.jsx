function NavBar({ toggleTema, activo, onInvertir }) {
    return (
        <nav className="barra-navegacion">
            <div className="logo-marca">Trade-Os</div>
            <ul className="enlaces-nav">
                <li>
                    <a
                        href="#invertir"
                        className="nav-invertir"
                        onClick={e => { e.preventDefault(); onInvertir(); }}
                    >
                        Invertir
                    </a>
                </li>
                <li>
                    <label className="switch-tema" title={activo ? 'Modo oscuro' : 'Modo claro'}>
                        <input type="checkbox" checked={activo} onChange={toggleTema} />
                        <span className="switch-pista"></span>
                    </label>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;