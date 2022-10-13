import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './store/StoreProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
      <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </StoreProvider>
  </React.StrictMode>
);


