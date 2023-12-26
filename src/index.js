import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import BrowserRouter as wrapper  for all aplication, to be able to route everything in our app

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <App />
    </BrowserRouter>
);