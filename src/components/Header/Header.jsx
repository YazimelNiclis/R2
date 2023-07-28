import React from "react";
import "../../App.css";
function Header() {
  return (
    <>
      <header>
        <img src="/img/banner.jpg" />
      </header>
      <nav id="menu1">
        <div>
          <a href="">Inicio</a>
        </div>
        <div>
          <a href="">Cursos</a>
        </div>
        <div>
          <a href="">Libros</a>
        </div>
        <div>
          <a href="">Contacto</a>
        </div>
      </nav>
    </>
  );
}

export default Header;
