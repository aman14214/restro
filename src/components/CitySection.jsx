import React, { useState } from "react";
import "./CitySection.css";

const CitySection = () => {
  const [showFoodAll, setShowFoodAll] = useState(false);
  const [showGroceryAll, setShowGroceryAll] = useState(false);

  // Food delivery cities
  const foodCities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi",
    "Mumbai", "Pune", "Kolkata", "Chennai",
    "Ahmedabad", "Chandigarh", "Jaipur", "Lucknow",
    "Indore", "Nagpur", "Patna", "Bhopal", "Ludhiana"
  ];

  // Grocery delivery cities
  const groceryCities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi",
    "Mumbai", "Pune", "Kolkata", "Chennai",
    "Ahmedabad", "Chandigarh", "Jaipur", "Surat",
    "Kanpur", "Visakhapatnam", "Nashik", "Vadodara", "Coimbatore"
  ];

  const renderCities = (cities, showAll, type, toggleFn) => {
    const visible = showAll ? cities : cities.slice(0, 9);

    return (
      <div className="city-section">
        <h2>Cities with {type}</h2>
        <div className="city-grid">
          {visible.map((city, index) => (
            <button key={index} className="city-btn">
              {`Order ${type} in ${city}`}
            </button>
          ))}
          <button className="city-btn show-more" onClick={() => toggleFn(!showAll)}>
            {showAll ? "Show Less ▲" : "Show More ▼"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderCities(foodCities, showFoodAll, "food delivery", setShowFoodAll)}
      {renderCities(groceryCities, showGroceryAll, "grocery delivery", setShowGroceryAll)}
    </>
  );
};

export default CitySection;
