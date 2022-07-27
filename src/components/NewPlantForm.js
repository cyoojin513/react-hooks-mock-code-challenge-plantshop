import React, { useState } from "react";

function NewPlantForm({renderNewPlant}) {

  const [newPName, setNewPName] = useState("")
  const [newPImage, setNewPImage] = useState("")
  const [newPPrice, setNewPPrice] = useState("")

  function submitBtn(e) {
    e.preventDefault()
    const newObj = {
      name: newPName,
      image: newPImage,
      price: newPPrice,
    }

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newObj)
    }).then(res => res.json())
      .then((item) => renderNewPlant(item))
    
    setNewPName(""); setNewPImage(""); setNewPPrice("")
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitBtn}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={(e) => setNewPName(e.target.value)}
          value={newPName}  
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={(e) => setNewPImage(e.target.value)}
          value={newPImage} 
          />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={(e) => setNewPPrice(e.target.value)}
          value={newPPrice}   
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
