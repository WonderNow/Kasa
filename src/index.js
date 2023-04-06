import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importation des composants de React Router
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import './scss/main.scss';

// Définition de la racine du rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<FicheLogement />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
