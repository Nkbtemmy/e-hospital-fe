import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/index.css';
import reportWebVitals from './reportWebVitals';
import {
} from "react-router-dom";
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
)

reportWebVitals();
