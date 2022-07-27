import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsList }) {

  return (
    <ul className="cards">
      {plantsList.map((item) => 
        <PlantCard key={item.id} plant={item}
          /*other way
           key={item.id}
           name={item.name}
           image={item.image}
           price={item.price}*/
        />
      )}
    </ul>
  );
}

export default PlantList;
