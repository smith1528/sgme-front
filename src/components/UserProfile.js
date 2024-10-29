// src/components/UserProfile.js
import React from 'react';
import './UserProfile.css';
import userImage from '../img/1.png'; // Ejemplo: Cambia la ruta seg�n el nombre de tus im�genes

function UserProfile() {
    return (
        <div className="container">
            {/* Barra lateral */}
            <div className="sidebar">
                <img src="/logo.png" alt="Logo" className="logo" />
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

                {/* Secci�n de perfil */}
                <div className="profile-section">
                    {[...Array(3)].map((_, index) => (
                        <div className="user-card" key={index}>
                            <img src={userImage} alt="Usuario" className="user-avatar" />
                            <div className="name">Full Name</div>
                            <div className="role">Role</div>
                            <div className="company">Company</div>
                            <div className="edit">Editar</div>
                        </div>
                    ))}
                </div>

                {/* Pie de p�gina */}
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