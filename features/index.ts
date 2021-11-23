import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from './reservationSlice';
import customerReducer from './customerSlice';

export const store = configureStore({
  reducer:{
    // add slices here
    reservations: reservationsReducer,
    customer: customerReducer,
  },
})

// typescript thing
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
