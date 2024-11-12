// src/components/CoursesInProgress.js
import React from 'react';
import { Link } from 'react-router-dom';  // Importa Link para la navegación
import Sidebar from './Sidebar';  // Asegúrate de tener el Sidebar importado
import './CoursesInProgress.css';  // Archivo CSS para la página de Cursos en Progreso
import courseImage5 from '../img/facebook.jpeg';
import courseImage1 from '../img/net.png';

function CoursesInProgress() {
    return (
        <div className="category-courses">
            <div className="content">
                {/* Barra lateral */}
                <aside className="sidebar">
                    <nav>
                        <ul>
                            <li><Link to="/categoria-cursos"><button>📑 Categoria de cursos</button></Link></li>
                            <li><Link to="/curso-en-progreso"><button>📚 Cursos en progreso</button></Link></li>
                            <li><Link to="/user-profile"><button>⚙ Configuracion de usuarios</button></Link></li>
                            <li><Link to="/menu-principal"><button>❓ Ayuda</button></Link></li>
                        </ul>
                    </nav>
                </aside>

            {/* Contenido principal */}
            <div className="main-content">
                {/* Encabezado */}
                <div className="header">
                    Cursos en Progreso
                </div>

                {/* Curso 1: Netflix */}
                <div className="course-card">
                    <div className="course-info">
                        <h3>Netflix: Como ver contenido de forma optima</h3>
                        <p>En este curso, aprenderas las mejores practicas para ver contenido en Netflix, optimizando la calidad del video y el uso de las listas de recomendados.</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '50%' }}></div>
                        </div>
                        <p>50% Completo</p>
                    </div>
                    <div className="course-image">
                        <img src={courseImage1} alt="Netflix" className="course-image" />
                    </div>
                </div>

                {/* Curso 2: Facebook */}
                <div className="course-card">
                    <div className="course-info">
                        <h3>Facebook: La mejor forma de manejar tu feed</h3>
                        <p>En este curso, aprenderas a organizar y personalizar tu feed de noticias en Facebook, utilizando herramientas y configuraciones para mejorar la experiencia de usuario.</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '30%' }}></div>
                        </div>
                        <p>30% Completo</p>
                    </div>
                    <div className="course-image">
                        <img src={courseImage5} alt="Netflix" className="course-image" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CoursesInProgress;
