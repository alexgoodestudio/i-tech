import { Routes, Route } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Products from './pages/Products';
import {BrowserRouter}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";



function App(){
  return(
    <div>
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
 
