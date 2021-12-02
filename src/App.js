import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllViewpointsPage from './pages/AllViewpoints';
import NewViewpointPage from './pages/NewViewpoint';
import FavoritesPage from './pages/Favorites';
import Footer from './components/layout/Footer'
import './App.css';

const App = () => {

    return (
        <BrowserRouter>
            <Layout>

                <Routes>
                    <Route path='/' exact
                        element={<AllViewpointsPage />} />

                    <Route path="/new-viewpoint"
                        element={<NewViewpointPage />} />

                    <Route path="/favorites"
                        element={<FavoritesPage />} />

                </Routes>
            </Layout>
            <Footer />
        </BrowserRouter>
    );
}

export default App;