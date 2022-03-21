import './App.css';
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer';
import Card from './components/Card';
import cardData from './components/cardData';
import React, { useState } from "react";

function App() {
  let card = cardData.map((cardItem)=>{
    return(
      <Card cardContent = {{imgSrc: cardItem.imgSrc,
      name: cardItem.name,
      description: cardItem.description}}
      />
    )
  })

  let [favImg, setfavImg] = useState([]);

  // counter starts
  let [count, setCount] = useState(0);
  function incrementHandler() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    
  };
  function decrementHandler() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
    
  };

//counter ends

  return (
    <div className='app'>
      <Header />
      <Hero />
      <h2>Destinations</h2>

      <div className='cards'>
      {card}
      </div>
      <h2>Favourites</h2>
      <div className='cards'>

      </div>
      <Footer />
    </div>
    // counter starts
    // z
    // counter ends
  );
}

export default App;
