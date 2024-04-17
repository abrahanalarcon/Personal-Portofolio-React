

function Header() {
  return (
    <header>
      <div className="contenedor">
        <div className="barra">
          <a className="logo" href="index.html">
            <h1 className="logo__nombre no-margin centrar-texto">Personal<span className="logo__bold"> Portofolio</span></h1>
          </a>

          <nav className="navegacion">
            <a href="Services.html" className="navegacion__enlace">Services</a>
            <a href="jsap.html" className="navegacion__enlace">Portofolio</a>
            <a href="Contact.html" className="navegacion__enlace">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
