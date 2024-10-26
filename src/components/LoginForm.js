import React from 'react';

function LoginForm() {
  return (
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
  );
}

export default LoginForm;
