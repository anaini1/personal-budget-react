import React from 'react';
import './App.scss';
//import { Switch, Route } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";


import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';


function App() {
  return (
    <Router>
    <div className="mainContainer">
      <Menu/>
      <Hero/>
      <Routes>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<HomePage/>}/>
      </Routes>
    <Footer/> 
    </div>
    </Router>
  
  )
}


export default App;
