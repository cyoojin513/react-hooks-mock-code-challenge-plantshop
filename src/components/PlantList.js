import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsList, deletingCard }) {

  return (
    <ul className="cards">
      {plantsList.map((item) => 
        <PlantCard 
          key={item.id}
          plant={item}
          deletingCard={deletingCard}
        />
      )}
    </ul>
  );
}

export default PlantList;
