import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
// Tener pendiente para mas adelante un Provider 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
)
