import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { FavoritesContextProvider } from './store/favorites-context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(

    <FavoritesContextProvider>

        <App />

    </FavoritesContextProvider>,

    document.getElementById('react-container')
);