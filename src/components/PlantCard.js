import React, { useState } from "react";

function PlantCard({plant, deletingCard}) {

  const [isInStock, setIsInStock] = useState(true)

  function handleInStock() {
    setIsInStock(!isInStock)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    }).then(() => deletingCard(plant.id))
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleInStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>🗑️</button>
    </li>
  );
}

export default PlantCard;
