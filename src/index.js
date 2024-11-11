import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // Importar BrowserRouter

ReactDOM.render(
    <BrowserRouter> {/* Envolver la aplicaci�n con BrowserRouter */}
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
