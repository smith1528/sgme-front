import React from 'react';
import './MainMenu.css';
import logo1 from '../img/1.png';
import { useNavigate } from 'react-router-dom'; // Importamos el hook useNavigate

function MainMenu() {
    const navigate = useNavigate(); // Inicializamos el hook de navegación

    // Funciones para manejar los clics en los botones
    const handleCategoriaCursos = () => {
        navigate('/categoria-cursos'); // Redirige a la página de categoría de cursos
    };

    const handleCursosProgreso = () => {
        navigate('/curso-en-progreso'); // Redirige a la página de cursos en progreso
    };

    const handleConfiguracion = () => {
        navigate('/user-profile'); // Redirige a la página de configuración de usuarios (UserProfile)
    };

    

    const handleAyuda = () => {
        navigate('/menu-principal'); // Redirige a la página de ayuda
    };

    return (
        <div className="main-menu">
            {/* Encabezado */}
            <header className="header">
                <h1>Menu principal</h1>
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
                        <img src={logo1} alt="S.G.M.E" />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <button onClick={handleCategoriaCursos} className="sidebar-button">
                                    <span className="icon">&#128209;</span> Categoria de cursos
                                </button>
                            </li>
                            <li>
                                <button onClick={handleCursosProgreso} className="sidebar-button">
                                    <span className="icon">&#128218;</span> Cursos en progreso
                                </button>
                            </li>
                            <li>
                                <button onClick={handleConfiguracion} className="sidebar-button">
                                    <span className="icon">&#9881;</span> Configuracion de usuarios
                                </button>
                            </li>
                            
                            <li>
                                <button onClick={handleAyuda} className="sidebar-button">
                                    <span className="icon">&#10067;</span> Ayuda
                                </button>
                            </li>
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
                        <img src={logo1} alt="S.G.M.E" />
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
