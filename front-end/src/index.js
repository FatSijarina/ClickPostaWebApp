import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './style.css';
import { UserContextProvider } from './Context/UserContext';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <UserContextProvider>
            <BrowserRouter>
                    <App />
            </BrowserRouter>  
        </UserContextProvider>
    </React.StrictMode>
);