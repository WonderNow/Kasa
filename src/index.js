import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Home />
    </div>
  </React.StrictMode>
);