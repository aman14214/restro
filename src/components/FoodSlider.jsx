import React from "react";
import "./FoodSlider.css";

// Import images
import burger from "../assets/images/burger.jpg";
import pizza from "../assets/images/pizza.jpg";
import momo from "../assets/images/momo.jpg";
import noodles from "../assets/images/noodles.jpg";
import biryani from "../assets/images/biryani.jpg";
import cake from "../assets/images/cake.jpg";

const foodItems = [
  { img: burger, name: "Burger" },
  { img: pizza, name: "Pizza" },
  { img: momo, name: "Momo" },
  { img: noodles, name: "Noodles" },
  { img: biryani, name: "Biryani" },
  { img: cake, name: "Cake" },
];

export default function FoodSlider() {
  return (
    <section className="food-slider">
      <h2>Order our best food options</h2>
      <div className="slider-wrapper">
        <div className="slider-track">
          {foodItems.concat(foodItems).map((item, i) => (
            <div className="food-card" key={i}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
