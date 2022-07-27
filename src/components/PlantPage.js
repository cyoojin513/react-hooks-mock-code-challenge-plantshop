import React, { useEffect, useState }from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])

  function renderNewPlant(newObj) {
    setPlants([...plants, newObj])
  }

  function filterOutCard(objId) {
    const updatedList = plants.filter((item) =>
      item.id !== objId)
    setPlants(updatedList)
  }

  const [searchedName, setSearchedName] = useState("")

  function handleNameChange(value) {
    setSearchedName(value)
  }

  const plantToDisplay = plants.filter((item) =>
    item.name.toLowerCase().includes(searchedName.toLowerCase())
  )

  return (
    <main>
      <NewPlantForm renderNewPlant={renderNewPlant} displayedPlants={plantToDisplay}/>
      <Search handleFilter={handleNameChange}/>
      <PlantList
        plantsList={plantToDisplay}
        deletingCard={filterOutCard}
      />
    </main>
  );
}

export default PlantPage;
