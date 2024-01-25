import React from 'react';
import './App.scss';
import Home from "../src/componenets/pages/HomePage/HomePage.jsx";
import Header from "../src/componenets/Header/Header.jsx";
import Onboarding from "./componenets/pages/OnboardingPage/Onboarding.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page  */}
              <Route path="/Onboarding" element={<Onboarding />} /> {/* Onoarding page  */}
              <Route path="/Header" element={<Header />} /> {/* Header page  */}
          
          </Routes>
      </BrowserRouter>
  );
  
}

export default App;
