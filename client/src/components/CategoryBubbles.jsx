import React from 'react';
import Savory from "../assets/bubbles/Savory.png";
import Chips from "../assets/bubbles/Chips.png";
import Candy from "../assets/bubbles/Candy.png";
import Chocolate from "../assets/bubbles/Chocolate.png";
import Drinks from "../assets/bubbles/Drinks.png";
import Crackers from "../assets/bubbles/Crackers.png";



function CategoryBubbles() {
  return (
    <div className="bubble-container">
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer shadow-xl">
          <img src={Candy} alt="Candy"
            className="w-14" />
        </div>
        <p>
          CANDY
        </p>
      </a>
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer shadow-xl">
          <img src={Chips} alt="Chips" className="w-14" />
        </div>
        <p>
          CHIPS
        </p>
      </a>
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer shadow-xl">
          <img src={Chocolate} alt="Chocolate" className="w-14" />
        </div>
        <p>
          CHOCOLATE
        </p>
      </a>
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer shadow-xl">
          <img src={Crackers} alt="Crackers" className="w-14" />
        </div>
        <p>
          CRACKERS
        </p>
      </a>
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer shadow-xl">
          <img src={Drinks} alt="Drinks" className="w-14" />
        </div>
        <p>
          DRINKS
        </p>
      </a>
      <a href="#" target="_blank">
        <div className="bubble hover:scale-110 ease-in duration-300 cursor-pointer shadow-xl">
          <img src={Savory} alt="Savory" className="w-14" />
        </div>
        <p>
          SAVORY
        </p>
      </a>
    </div>
  );
}

export default CategoryBubbles;

