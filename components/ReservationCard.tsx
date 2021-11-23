import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

// in typescript we need to define how our typescript is gonna be
interface ReservationCardTypes {
  name: string,
  index: number,
}

export default function ReservationCard({ name, index }:ReservationCardTypes) {
  const dispatch = useDispatch();
  
  return(
    <div className="reservation-card-container" onClick={() => {
      dispatch(removeReservation(index))
      dispatch(addCustomer({ 
        // i want the id to be a dynammically generated string
        id:uuid(),
        name,
        food:[]
        }));
      }}
      
    >{name}</div>
  )
}