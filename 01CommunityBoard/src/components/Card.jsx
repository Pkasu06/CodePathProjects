import React from 'react'

function Card({ foodTruckImage, foodTruckName, cuisine, menuLink }) {
    return (
        <div className="card">
            <img src={foodTruckImage} width="300px" height="300px" alt={foodTruckName} />
            <h3>{foodTruckName}</h3>
            <h4>{cuisine}</h4>
            <a href={menuLink} target="_blank">
                <button>View Menu</button>
            </a>
        </div>
    )
}

export default Card