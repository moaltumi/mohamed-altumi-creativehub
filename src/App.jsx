import React from "react";
import "./App.scss";
import Home from "../src/componenets/pages/HomePage/HomePage.jsx";
import Header from "../src/componenets/Header/Header.jsx";
import OnboardingPage from "./componenets/pages/OnboardingPage/OnboardingPage.jsx";
import Feeds from "./componenets/pages/Feeds/Feeds.jsx";
import SignUpPage from "./componenets/pages/SignUpPage/SignUpPage.jsx";
import CategoryPage from "./componenets/pages/CategoryPage/CategoryPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page  */}
        <Route path="/Header" element={<Header />} /> {/* Header page  */}
        <Route path="/Onboarding" element={<OnboardingPage />} />
        <Route path="Onboarding/Feeds" element={<Feeds />} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="signup/Category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
