import React, { useState } from 'react';
import './App.css'; // CSS principal del proyecto
import LoginRegister from './components/LoginRegister';
import UserProfile from './components/UserProfile';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para alternar la vista

    return (
        <div className="App SGME">
            {isLoggedIn ? <UserProfile /> : <LoginRegister />}

            {/* Bot�n para cambiar entre vistas (solo para pruebas, puedes manejar esto seg�n la l�gica de tu aplicaci�n) */}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default App;
