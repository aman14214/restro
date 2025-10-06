import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import FoodCard from "./components/FoodCard";
import FoodSlider from "./components/FoodSlider";
import RestaurantSlider from "./components/RestaurantSlider";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage"; // 🔹 we'll create this next
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="cards">
                <FoodCard />
              </div>
              <FoodSlider />
              <RestaurantSlider />
              <Footer />
            </>
          }
        />

        {/* 🔐 Auth Page (Login / Signup) */}
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
