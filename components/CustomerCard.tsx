import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../features";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}

interface addFoodToCustomerPayload {
  id: string;
  food: string
}

export default function CustomerCard({ id, name, food }: CustomerCardTypes){
  const dispatch = useDispatch();
  const [foodOrderInput, setFoodOrderInput] = useState("");

  const handleAddOrder = () => {
    // an empty string by default returns falsy
    if(!foodOrderInput) return;
    dispatch(addFoodToCustomer({id, food:foodOrderInput}));
    setFoodOrderInput("");
  }

  return(
      <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
            { food.map((food) => {return <p>{food}</p>} )}
          </div>
          <div className="customer-food-input-container">
            <input 
              value={foodOrderInput}
              onChange={(e) => {setFoodOrderInput(e.target.value)}}
            />
            <button onClick={handleAddOrder}>Add</button>
          </div>
        </div>
      </div>
  );
}