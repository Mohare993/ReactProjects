import React from 'react';
import './card.css';
import Card from './CardComp/Card';
import DanImg from './dan.jpg';


function App() {

  const myCardData = {title: "Dan, The Pure", cost: "8", type: "Pure", textBox: "The purest of them all. Java Wizard" , power: "6/9",footer:"001/205 U" }
  
  return (
    <div>
      <Card cardData = {myCardData} imge= {DanImg}/>
    </div>
  );
}

export default App;
