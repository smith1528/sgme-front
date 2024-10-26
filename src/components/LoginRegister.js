// src/components/LoginRegister.js
import './LoginRegister.css';
import React from 'react';
import './LoginRegister.css'; // Aseg�rate de que el archivo CSS est� en la misma carpeta

function LoginRegister() {
    return (
        <>
            {/* Barra de navegaci�n superior */}
            <header className="header">
                <h1>Inicio Sesión/Registrarse</h1>
            </header>

            {/* Contenedor principal */}
            <div className="main-container">
                {/* Men� lateral */}
                <aside className="sidebar">
                    <div className="logo">
                        <img src="./1.png" alt="SG.M.E" />
                        <div className="line"></div>
                    </div>
                    <nav>
                        <ul>
                            <div className="logoC">
                                <li>
                                    <img src="./2.png" alt="Configuraci�n" className="icon" />
                                    <a href="#">Configuración</a>
                                </li>
                            </div>
                            <div className="logoP">
                                <li>
                                    <img src="./3.png" alt="AgregarPerfil" className="icon" />
                                    <a href="#">Agregar perfil</a>
                                </li>
                            </div>
                            <div className="logoA">
                                <li>
                                    <img src="./4.png" alt="Ayuda" className="icon" />
                                    <a href="#">Ayuda</a>
                                </li>
                            </div>
                        </ul>
                    </nav>
                    <div className="back-button">
                        <img src="./5.png" alt="Ayuda" className="icon" />
                        <button>Regresar</button>
                    </div>
                </aside>

                {/* Secci�n de contenido central */}
                <main className="content">

                    <section className="login">
                        <h2>Iniciar sesión</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Correo:</label>
                                <input type="email" id="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña:</label>
                                <input type="password" id="password" required />
                            </div>
                            <div className="remember">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Recuérdame</label>
                            </div>
                            <div className="login-actions">
                                <button type="submit">Iniciar sesión</button>
                                <a href="#">¿Olvidaste tu contraseña?</a>
                            </div>
                            <p>O inicia sesión usando:</p>
                            <button className="social">Facebook</button>
                            <button className="social">Google</button>
                        </form>
                    </section>

                    <section className="register">
                        <h2>Registrarse</h2>
                        <form>
                            <div className="form-groupR">
                                <label htmlFor="name">Nombre:</label>
                                <input type="text" id="name" required />
                            </div>
                            <div className="form-groupR">
                                <label htmlFor="register-email">Correo:</label>
                                <input type="email" id="register-email" required />
                            </div>
                            <div className="form-groupR">
                                <label htmlFor="register-password">Contraseña:</label>
                                <input type="password" id="register-password" required />
                            </div>
                            <div className="form-groupR">
                                <label htmlFor="repeat-password">Repetir contraseña:</label>
                                <input type="password" id="repeat-password" required />
                            </div>
                            <div className="form-groupR">
                                <label htmlFor="user-type">Tipo de usuario:</label>
                                <select id="user-type">
                                    <option value="admin">Administrador</option>
                                    <option value="user">Usuario</option>
                                </select>
                            </div>
                            <div className="terms">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">Estoy de acuerdo con los términos de uso y políticas de privacidad</label>
                            </div>
                            <button type="submit">Registrarse</button>
                            <p>O registra usando:</p>
                            <button className="social">Facebook</button>
                            <button className="social">Google</button>
                        </form>
                    </section>

                </main>
            </div>

            {/* Pie de p�gina */}
            <footer className="footer">
                <div className="footer-links">
                    <div>
                        <h4>Topic</h4>
                        <ul>
                            <li><a href="#">Secondary link</a></li>
                            <li><a href="#">Secondary link</a></li>
                            <li><a href="#">Secondary link</a></li>
                        </ul>
                    </div>
                    {/* Agrega otros enlaces de la misma forma */}
                </div>
            </footer>
        </>
    );
}

export default LoginRegister;