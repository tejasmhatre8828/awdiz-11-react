import React, { useState } from "react";

const CreateFruit = () => {
    const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);
    const [newFruit, setNewFruit] = useState("");
    const handleInputChange = (event) => {
        setNewFruit(event.target.value);
    }
    const handleSubmit = () => {
        if (newFruit.length > 0) {
            setFruits([...fruits, newFruit])
            setNewFruit("");
        } else {
            alert("Please enter a fruit name before adding.")
        }
    }
    const handleDelete = (indexToDelete) => {
        const confirmed = window.confirm("Are you sure you want to delete this fruit?");
        if (confirmed) {
            const updatedFruits = fruits.filter((_, index) => index !== indexToDelete);
            setFruits(updatedFruits);
        }
    }
    return (
        <div>
            <h1>Fruits</h1>
            {fruits.map((fruit, index) => (
                <div>
                    <h1>
                        {index + 1}.{fruit}
                    </h1>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
            <input onChange={handleInputChange} />
            <br />
            <button onClick={handleSubmit}>Add {newFruit}</button>
        </div>
    )
}

export default CreateFruit