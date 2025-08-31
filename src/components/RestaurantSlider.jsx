import React from "react";
import "./RestaurantSlider.css";

// import local images
import res1 from "../assets/images/res1.jpg";
import res2 from "../assets/images/res2.jpg";
import res3 from "../assets/images/res3.jpg";
import res4 from "../assets/images/res4.jpg";

// Sample restaurant data
const restaurants = [
  {
    name: "Ikk Panjab",
    location: "Connaught Place, Delhi",
    cuisine: "North Indian • Beverages",
    price: "₹2500 for two",
    distance: "4.7 km",
    rating: "4.6",
    img: res1,
    offer: "Flat 25% off on pre-booking",
  },
  {
    name: "Ghoomar Traditional Thali",
    location: "Chandni Chowk, Delhi",
    cuisine: "North Indian • Beverages",
    price: "₹1000 for two",
    distance: "1.4 km",
    rating: "4.7",
    img: res2,
    offer: "Flat 15% off on pre-booking",
  },
  {
    name: "Dhaba Estd 1986",
    location: "Civil Lines, Delhi",
    cuisine: "North Indian • Indian Cuisine",
    price: "₹1500 for two",
    distance: "5 km",
    rating: "4.9",
    img: res3,
    offer: "Flat 20% off on pre-booking",
  },
  {
    name: "Parikrama The Revolving",
    location: "Barakhamba, Delhi",
    cuisine: "North Indian • Chinese",
    price: "₹2000 for two",
    distance: "3.5 km",
    rating: "4.5",
    img: res4,
    offer: "Flat 25% off on pre-booking",
  },
];

export default function RestaurantSlider() {
  return (
    <section className="restaurant-slider">
      <h2>Discover best restaurants on Dineout</h2>
      <div className="slider-wrapper">
        <div className="slider-track">
          {restaurants.concat(restaurants).map((res, i) => (
            <div className="restaurant-card" key={i}>
              <div className="card-img">
                <img src={res.img} alt={res.name} />
                <span className="rating">⭐ {res.rating}</span>
              </div>
              <div className="card-body">
                <h3>{res.name}</h3>
                <p className="cuisine">{res.cuisine}</p>
                <p className="info">
                  {res.price} • {res.distance}
                </p>
                <p className="location">{res.location}</p>
                <div className="offer">{res.offer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
