import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// typescript thing
export interface ReservationState {
  value: string[],
}

const initialState: ReservationState = {
  value:["Selena"],
}

export const reservationsSlice = createSlice({
  name: "reservation",
  initialState,
  reducers:{
    addReservation: (state, action: PayloadAction<string>) =>{
      state.value.push(action.payload)
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1)
    }
  },
});

export const { addReservation, removeReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;