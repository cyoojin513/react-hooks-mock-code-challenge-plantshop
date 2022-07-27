import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantsList, renderNewPlant, handleFilter}) {
  return (
    <main>
      <NewPlantForm renderNewPlant={renderNewPlant}/>
      <Search handleFilter={handleFilter}/>
      <PlantList plantsList={plantsList}/>
    </main>
  );
}

export default PlantPage;
