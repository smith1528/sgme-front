import React from 'react';
import './UserProfile.css';
import userImage from '../img/user.png'; // Cambia esta ruta según tu imagen de perfil
import logo from '../img/1.png'; // Cambia esta ruta según tu logo
import { useNavigate } from 'react-router-dom'; // Importamos el hook useNavigate

function UserProfile() {
    const navigate = useNavigate(); // Inicializamos el hook de navegación

    // Función para manejar la navegación hacia MainMenu cuando se hace clic en "Regresar"
    const handleRegresar = () => {
        navigate('/menu-principal'); // Redirige al Menú Principal
    };

    return (
        <div className="container">
            {/* Barra lateral */}
            <div className="sidebar">
                <img src={logo} alt="Logo" className="logo" /> {/* Logo actualizado */}
                <button onClick={() => navigate('/menu-principal')} className="sidebar-button">Configuración</button>
                <button onClick={() => navigate('/user-profile')} className="sidebar-button">Editar Perfil</button>
                <button onClick={() => navigate('/menu-principal')} className="sidebar-button">Ayuda</button>
                <button onClick={handleRegresar} className="sidebar-button">Regresar</button> {/* Redirige al Menú Principal */}
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
                    <span className="link">Términos</span> |
                    <span className="link">Privacidad</span> |
                    <span className="link">Enlace Reservado</span>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
