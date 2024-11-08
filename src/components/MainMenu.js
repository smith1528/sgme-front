import React from 'react';
import './MainMenu.css';
import logo1 from '../img/1.png';
function MainMenu() {
  return (
    <div className="main-menu">
      {/* Encabezado */}
      <header className="header">
        <h1>Menú principal</h1>
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
          <button>Buscar</button>
        </div>
      </header>

      {/* Contenedor principal */}
      <div className="container">
        {/* Barra lateral */}
        <aside className="sidebar">
          <div className="logo">
                      <img src={logo1} alt="SG.M.E" />
          </div>
          <nav>
            <ul>
              <li><span className="icon">&#128209;</span> Categoria de cursos</li>
              <li><span className="icon">&#128218;</span> Cursos en progreso</li>
              <li><span className="icon">&#9881;</span> Configuraciin</li>
              <li><span className="icon">&#128100;</span> Agregar perfil</li>
              <li><span className="icon">&#10067;</span> Ayuda</li>
            </ul>
          </nav>
          <div className="profile">
            <span className="icon">&#128100;</span> Perfil
          </div>
        </aside>

        {/* Área de contenido central */}
        <main className="content">
          {/* Aquí puedes agregar el contenido principal */}
        </main>
      </div>

      {/* Pie de página */}
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Topic</h4>
            <ul>
              <li><a href="#">Secondary link</a></li>
              <li><a href="#">Secondary link</a></li>
              <li><a href="#">Secondary link</a></li>
            </ul>
          </div>
          {/* Agrega más columnas si es necesario */}
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="./path-to-footer-logo.png" alt="SG.M.E" />
          </div>
          <div className="footer-info">
            <p>Agente y Contact Center</p>
            <p>Info@sgme.org</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainMenu;
