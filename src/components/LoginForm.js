//// LoginForm.js
//import React, { useState } from 'react';
//import { auth } from '../firebaseConfig'; // Asegúrate de importar tu configuración de Firebase

//const LoginForm = ({ rememberMe, setError }) => {
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');

//    const handleSubmit = async (e) => {
//        e.preventDefault();
//        try {
//            await auth.signInWithEmailAndPassword(email, password);
//            if (rememberMe) {
//                localStorage.setItem('email', email); // Guarda el correo en localStorage si se selecciona "Recuérdame"
//            }
//        } catch (err) {
//            setError(err.message);
//        }
//    };

//    return (
//        <form onSubmit={handleSubmit}>
//            <div>
//                <label>
//                    Correo:
//                    <input
//                        type="email"
//                        value={email}
//                        onChange={(e) => setEmail(e.target.value)}
//                        required
//                    />
//                </label>
//            </div>
//            <div>
//                <label>
//                    Contraseña:
//                    <input
//                        type="password"
//                        value={password}
//                        onChange={(e) => setPassword(e.target.value)}
//                        required
//                    />
//                </label>
//            </div>
//            <button type="submit">Iniciar Sesión</button>
//        </form>
//    );
//};

//export default LoginForm;


import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            setError("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
            return;
        }
        setError('');
        // Implementar lógica de autenticación aquí
    };

    const handleGoogleLogin = () => {
        // Lógica para redirigir a la autenticación de Google
        window.location.href = '/auth/google';
    };

    const handleFacebookLogin = () => {
        // Lógica para redirigir a la autenticación de Facebook
        window.location.href = '/auth/facebook';
    };

    return (
        <section className="login">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="remember">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Recuérdame</label>
                </div>
                <div className="login-actions">
                    <button type="submit">Iniciar sesión</button>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
                <p>O inicia sesión usando:</p>
                <button className="social" onClick={handleFacebookLogin}>Facebook</button>
                <button className="social" onClick={handleGoogleLogin}>Google</button>
            </form>
        </section>
    );
}

export default LoginForm;


//import React from 'react';

//function LoginForm() {
//  return (
//    <section className="login">
//      <h2>Iniciar sesión</h2>
//      <form>
//        <div className="form-group">
//          <label htmlFor="email">Correo:</label>
//          <input type="email" id="email" required />
//        </div>
//        <div className="form-group">
//          <label htmlFor="password">Contraseña:</label>
//          <input type="password" id="password" required />
//        </div>
//        <div className="remember">
//          <input type="checkbox" id="remember" />
//          <label htmlFor="remember">Recuerdame</label>
//        </div>
//        <div className="login-actions">
//          <button type="submit">Iniciar sesión</button>
//          <a href="#">¿Olvidaste tu contraseña?</a>
//        </div>
//        <p>O inicia sesión usando:</p>
//        <button className="social">Facebook</button>
//        <button className="social">Google</button>
//      </form>
//    </section>
//  );
//}

//export default LoginForm;


