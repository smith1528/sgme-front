import './LoginRegister.css';
import React from 'react';
import Sidebar from './Sidebar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function LoginRegister() {
  return (
    <>
      <header className="header">
        <h1>Inicio Sesión/Registrarse</h1>
      </header>
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <LoginForm />
          <RegisterForm />
        </main>
      </div>
      <footer className="footer">
        <div className="footer-links">
          <h4>Topic</h4>
          <ul>
            <li><a href="#">Secondary link</a></li>
            <li><a href="#">Secondary link</a></li>
            <li><a href="#">Secondary link</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default LoginRegister;