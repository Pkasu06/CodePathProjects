import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import { data } from './Constants'

function App() {

  

  return (
    <div className="app">
      <div className="header">
        <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png" />
        <h1>Food Truck Favorites</h1>
      </div>
      <div className="container">
        {data.map((foodTruck) => (
          <Card key={foodTruck.foodTruckName} foodTruckImage={foodTruck.foodTruckImage} foodTruckName={foodTruck.foodTruckName} cuisine={foodTruck.cuisine} menuLink={foodTruck.menuLink} />
        ))}
      </div>
    </div>
  )
}

export default App
