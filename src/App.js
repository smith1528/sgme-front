import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import CategoryCourses from './components/CategoryCourses';
import UserProfile from './components/UserProfile';
import LoginRegister from './components/LoginRegister';
import CoursesInProgress from './components/CoursesInProgress'; // Asegúrate de importar el componente

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para alternar la vista
    const navigate = useNavigate(); // Hook para navegación

    // Función para manejar login/logout
    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
        if (!isLoggedIn) {
            navigate('/menu-principal'); // Redirigir al Menú Principal
        } else {
            navigate('/register'); // Redirigir al formulario de registro
        }
    };

    return (
        <div>
            <Routes>
                <Route path="/register" element={<LoginRegister setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/menu-principal" element={isLoggedIn ? <MainMenu /> : <LoginRegister setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/categoria-cursos" element={<CategoryCourses />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/curso-en-progreso" element={<CoursesInProgress />} /> 
            </Routes>

            {/* Botón para alternar entre login y logout */}
            <div className="App SGME">
                <button onClick={handleLoginLogout}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </div>
        </div>
    );
}

export default App;
