import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])

  function renderNewPlant(newObj) {
    setPlants([...plants, newObj])
  }

  

  const [searchedName, setSearchedName] = useState("")

  function handleNameChange(value) {
    setSearchedName(value)
    console.log(value)
  }

  const plantToDisplay = plants.filter((item) =>
    item.name.toLowerCase().includes(searchedName.toLowerCase())
  )

  return (
    <div className="app">
      <Header />
      <PlantPage
        plantsList={plantToDisplay}
        renderNewPlant={renderNewPlant}
        handleFilter={handleNameChange}
      />
    </div>
  );
}

export default App;
