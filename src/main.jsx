import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import StorecontextProvider from './context/Storecontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StorecontextProvider>
      <App />
    </StorecontextProvider>
  </BrowserRouter>
);