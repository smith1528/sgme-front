// src/components/UserProfile.js
import React from 'react';
import './UserProfile.css';
import userImage from '../img/user.png'; // Cambia esta ruta según tu imagen de perfil
import logo from '../img/1.png'; // Cambia esta ruta según tu logo

function UserProfile() {
    return (
        <div className="container">
            {/* Barra lateral */}
            <div className="sidebar">
                <img src={logo} alt="Logo" className="logo" /> {/* Logo actualizado */}
                <a href="#">Configuracion</a>
                <a href="#">Editar Perfil</a>
                <a href="#">Ayuda</a>
                <a href="#">Regresar</a>
            </div>

            {/* Contenido principal */}
            <div className="main-content">
                {/* Encabezado */}
                <div className="header">
                    Perfil de Usuario
                </div>

                {/* Sección de perfil */}
                <div className="profile-section">
                    {[...Array(3)].map((_, index) => (
                        <div className="user-card" key={index}>
                            <img src={userImage} alt="Usuario" className="user-avatar" /> {/* Imagen de perfil */}
                            <div className="name">Nombre Completo</div>
                            <div className="role">Rol</div>
                            <div className="company">Universidad</div>
                            <div className="edit">Editar</div>
                        </div>
                    ))}
                </div>

                {/* Pie de página */}
                <div className="footer">
                    <span className="link">Terminos</span> |
                    <span className="link">Privacidad</span> |
                    <span className="link">Enlace Reservado</span>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
