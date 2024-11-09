import React, { useState } from 'react';
import './App.css'; // CSS principal del proyecto
import LoginRegister from './components/LoginRegister';
import UserProfile from './components/UserProfile';
import MainMenu from './components/MainMenu'; 



function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para alternar la vista

    return (
        <div className="App SGME">
            {/* Mostrar el componente correspondiente según el estado de isLoggedIn */}
            {isLoggedIn ? (
                <>
                    <UserProfile />
                    <MainMenu />
                </>
            ) : (
                <LoginRegister />
            )}

            {/* Botón para cambiar entre vistas (solo para pruebas, puedes manejar esto según la lógica de tu aplicación) */}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default App;
