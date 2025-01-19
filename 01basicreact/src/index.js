import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Volley from './Volley';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
       <Volley/>
       <App />
    </>
 );

// React Dom act as a personal DOM for react to get element here
// root.render render the two component "Volley " And "App" into DOM
// CreateRoot allows us to create a root to display render Component in Dom Node

