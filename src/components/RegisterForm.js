// RegisterForm.js
import React, { useState } from 'react';
import { auth, googleProvider, signInWithPopup } from '../firebaseConfig';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('Usuario');
    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError(null);
        try {
            await signInWithPopup(auth, googleProvider);
            // Manejar redirección o estado después del inicio de sesión
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // Validación del nombre
        if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
            setError('Por favor, ingresa un nombre válido.');
            return;
        }

        // Validación del correo
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('El correo debe estar en formato válido.');
            return;
        }

        // Validación de la contraseña
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(password)) {
            setError('La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.');
            return;
        }

        // Validación de la coincidencia de la contraseña
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        // Validación de los términos
        if (!agreed) {
            setError('Debes estar de acuerdo con los términos y condiciones.');
            return;
        }

        // Aquí puedes manejar la creación de usuario con correo y contraseña
        try {
            setLoading(true);
            // await createUserWithEmailAndPassword(auth, email, password);
            // Manejar redirección o estado después del registro
            // Limpiar los campos después de un registro exitoso
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setUserType('Usuario');
            setAgreed(false);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Correo:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Contraseña:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Repetir Contraseña:
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Tipo de Usuario:
                        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="Usuario">Usuario</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            required
                        />
                        Estoy de acuerdo con los términos de uso y políticas de privacidad
                    </label>
                    <a href="/terminos" target="_blank" rel="noopener noreferrer">Ver términos</a>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Cargando...' : 'Registrar'}
                </button>
            </form>
            <button onClick={handleGoogleSignIn} disabled={loading} style={{ marginTop: '10px' }}>
                {loading ? 'Cargando...' : 'Iniciar sesión con Google'}
            </button>
        </div>
    );
};

export default RegisterForm;



//// RegisterForm.js
//import React, { useState } from 'react';
//import { auth, googleProvider, signInWithPopup } from '../firebaseConfig';

//const RegisterForm = () => {
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');
//    const [error, setError] = useState(null);
//    const [loading, setLoading] = useState(false);

//    const handleGoogleSignIn = async () => {
//        setLoading(true);
//        setError(null); // Limpiar errores anteriores
//        try {
//            await signInWithPopup(auth, googleProvider);
//            // Aquí puedes redirigir al usuario o manejar el estado después del inicio de sesión
//        } catch (err) {
//            setError(err.message); // Captura y muestra el error
//        } finally {
//            setLoading(false);
//        }
//    };

//    const handleSubmit = async (e) => {
//        e.preventDefault();
//        setError(null); // Limpiar errores anteriores

//        // Validación del correo
//        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//        if (!emailPattern.test(email)) {
//            setError('El correo debe estar en formato válido.');
//            return;
//        }

//        // Validación de la contraseña
//        const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
//        if (!passwordPattern.test(password)) {
//            setError('La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.');
//            return;
//        }

//        // Aquí puedes manejar la creación de usuario con correo y contraseña
//        // Por ejemplo, usando createUserWithEmailAndPassword de Firebase
//        try {
//            setLoading(true);
//            // await createUserWithEmailAndPassword(auth, email, password);
//            // Aquí puedes redirigir al usuario o manejar el estado después del registro
//        } catch (err) {
//            setError(err.message);
//        } finally {
//            setLoading(false);
//        }
//    };

//    return (
//        <div>
//            <h2>Registro</h2>
//            {error && <p style={{ color: 'red' }}>{error}</p>}
//            <form onSubmit={handleSubmit}>
//                <div>
//                    <label>
//                        Correo:
//                        <input
//                            type="email"
//                            value={email}
//                            onChange={(e) => setEmail(e.target.value)}
//                            required
//                        />
//                    </label>
//                </div>
//                <div>
//                    <label>
//                        Contraseña:
//                        <input
//                            type="password"
//                            value={password}
//                            onChange={(e) => setPassword(e.target.value)}
//                            required
//                        />
//                    </label>
//                </div>
//                <button type="submit" disabled={loading}>
//                    {loading ? 'Cargando...' : 'Registrar'}
//                </button>
//            </form>
//            <button onClick={handleGoogleSignIn} disabled={loading}>
//                {loading ? 'Cargando...' : 'Iniciar sesión con Google'}
//            </button>
//        </div>
//    );
//};

//export default RegisterForm;



//import React, { useState } from 'react';

//function RegisterForm() {
//    const [password, setPassword] = useState('');
//    const [confirmPassword, setConfirmPassword] = useState('');
//    const [error, setError] = useState('');

//    const validatePassword = (password) => {
//        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
//        return passwordRegex.test(password);
//    };

//    const handleRegister = (e) => {
//        e.preventDefault();
//        if (!validatePassword(password)) {
//            setError("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
//            return;
//        }
//        if (password !== confirmPassword) {
//            setError("Las contraseñas no coinciden.");
//            return;
//        }
//        setError('');
//        // Lógica de registro aquí
//    };

//    return (
//        <section className="register">
//            <h2>Registrarse</h2>
//            <form onSubmit={handleRegister}>
//                <div className="form-groupR">
//                    <label htmlFor="name">Nombre:</label>
//                    <input type="text" id="name" required />
//                </div>
//                <div className="form-groupR">
//                    <label htmlFor="register-email">Correo:</label>
//                    <input type="email" id="register-email" required />
//                </div>
//                <div className="form-groupR">
//                    <label htmlFor="register-password">Contraseña:</label>
//                    <input type="password" id="register-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                </div>
//                <div className="form-groupR">
//                    <label htmlFor="repeat-password">Repetir contraseña:</label>
//                    <input type="password" id="repeat-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
//                </div>
//                {error && <p style={{ color: 'red' }}>{error}</p>}
//                <div className="terms">
//                    <input type="checkbox" id="terms" required />
//                    <label htmlFor="terms">Estoy de acuerdo con los términos de uso y políticas de privacidad</label>
//                </div>
//                <button type="submit">Registrarse</button>
//                <p>O registra usando:</p>
//                <button className="social" onClick={handleFacebookLogin}>Facebook</button>
//                <button className="social" onClick={handleGoogleLogin}>Google</button>
//            </form>
//        </section>
//    );
//}

/*export default RegisterForm;*/


//import React from 'react';

//function RegisterForm() {
//  return (
//    <section className="register">
//      <h2>Registrarse</h2>
//      <form>
//        <div className="form-groupR">
//          <label htmlFor="name">Nombre:</label>
//          <input type="text" id="name" required />
//        </div>
//        <div className="form-groupR">
//          <label htmlFor="register-email">Correo:</label>
//          <input type="email" id="register-email" required />
//        </div>
//        <div className="form-groupR">
//          <label htmlFor="register-password">Contraseña:</label>
//          <input type="password" id="register-password" required />
//        </div>
//        <div className="form-groupR">
//          <label htmlFor="repeat-password">Repetir contraseña:</label>
//          <input type="password" id="repeat-password" required />
//        </div>
//        <div className="form-groupR">
//          <label htmlFor="user-type">Tipo de usuario:</label>
//          <select id="user-type">
//            <option value="admin">Administrador</option>
//            <option value="user">Usuario</option>
//          </select>
//        </div>
//        <div className="terms">
//          <input type="checkbox" id="terms" required />
//          <label htmlFor="terms">Estoy de acuerdo con los términos de uso y políticas de privacidad</label>
//        </div>
//        <button type="submit">Registrarse</button>
//        <p>O registra usando:</p>
//        <button className="social">Facebook</button>
//        <button className="social">Google</button>
//      </form>
//    </section>
//  );
//}

//export default RegisterForm;


