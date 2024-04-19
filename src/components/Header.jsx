

function Header() {
  return (
    <header>
      <div className="contenedor">
        <div className="barra">
          <a className="logo" href="index.html">
            <h1 className="logo__nombre no-margin centrar-texto">Personal<span className="logo__bold"> Portofolio</span></h1>
          </a>

          <nav className="navegacion">
            <a href="#Services" className="navegacion__enlace">Services</a>
            <a href="#portafolio" className="navegacion__enlace">Portofolio</a>
            <a href="#last" className="navegacion__enlace">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
