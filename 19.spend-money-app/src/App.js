import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import products from './db/products.json';
import './App.css';

function App() {

  const [ money, setMoney ] = useState(3000000000);
  const [ total, setTotal ]= useState(0);
  const [ basket, setBasket ]= useState([]);
  console.log(typeof basket);
  useEffect( () => {
    setTotal(
      basket.reduce( (acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        )
      }, 0)
    )
  },[ basket ])
  
  return (
    <div>
      <Header
        total = { total }
        money = { money }
      />
      <div className="container">
        <Card 
          basket = {basket}
          setBasket = { setBasket }
          total = { total }
          money = { money }
          product = { products}
        />
      </div>

      {
        basket.length > 0 
          && <Footer 
                total = { total }
                basket = { basket }
                setBasket = { setBasket }
              />
      }
      <Footer/>
    </div>
  );
}

export default App;
