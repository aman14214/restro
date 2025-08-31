import React from "react";
import "./FoodCard.css";

import foodImg from "../assets/images/burger.jpg"; // <-- Add an image inside src/assets

function FoodCard() {
  return (
    <div className="food-card">
      <img src={foodImg} alt="Food Delivery" />
      <h2>Food Delivery</h2>
      <p>From Restaurants</p>
      <span className="offer">Upto 60% OFF</span>
    </div>
  );
}

export default FoodCard;
