import React from "react";
// import Header from "./components/Header";
import Hero from "./components/Hero";
import FoodCard from "./components/FoodCard";
import FoodSlider from "./components/FoodSlider";
import RestaurantSlider from "./components/RestaurantSlider";
import CitySection from "./components/CitySection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <div className="cards">
        <FoodCard />
      </div>
      <FoodSlider />
      <RestaurantSlider /> 
      <CitySection />
       <Footer />
    </div>
  );
}

export default App;
