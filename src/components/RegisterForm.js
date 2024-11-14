// src/components/RegisterForm.js
import React, { useState } from 'react';
import { auth, googleProvider, signInWithPopup } from '../firebaseConfig';
import DataPolicyModal from './DataPolicyModal';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('Usuario');
    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPolicyModal, setShowPolicyModal] = useState(false);

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError(null);
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // Validación de nombre
        if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
            setError('Por favor, ingresa un nombre válido.');
            return;
        }

        // Validación de correo
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('El correo debe estar en formato válido.');
            return;
        }

        // Validación de contraseña
        if (!validatePassword(password)) {
            setError('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.');
            return;
        }

        // Coincidencia de contraseñas
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        if (!agreed) {
            setError('Debes estar de acuerdo con los términos y condiciones.');
            return;
        }

        try {
            setLoading(true);
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setUserType('Usuario');
            setAgreed(false);
            setError(null); // Reiniciar errores si todo es correcto
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
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Correo:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Repetir Contraseña:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tipo de Usuario:</label>
                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="Usuario">Usuario</option>
                        <option value="Administrador">Administrador</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            required
                        />
                        Estoy de acuerdo con los{' '}
                        <span onClick={() => setShowPolicyModal(true)} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                            términos de uso y políticas de privacidad
                        </span>
                    </label>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Cargando...' : 'Registrar'}
                </button>
            </form>
            <button onClick={handleGoogleSignIn} disabled={loading} style={{ marginTop: '10px' }}>
                {loading ? 'Cargando...' : 'Iniciar sesión con Google'}
            </button>

            {showPolicyModal && <DataPolicyModal onClose={() => setShowPolicyModal(false)} />}
        </div>
    );
};

export default RegisterForm;
