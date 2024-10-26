import React from 'react';

function RegisterForm() {
  return (
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
  );
}

export default RegisterForm;
