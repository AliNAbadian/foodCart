import React, { useState } from "react"

function Cart() {

    const [foods, setFoods] = useState(["apple", "orange", 'banana']);

    function handleAddFood() {

        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = ''

        setFoods([...foods, newFood]);
    }

    return (<div>
        <h2>List of Foods</h2>
        <ul>
            {foods.map((food, index) => <li key={index}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add Food</button>
    </div>)
} export default Cart