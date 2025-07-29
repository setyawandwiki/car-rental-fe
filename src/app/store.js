import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import cityReducer from "../features/citySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    city: cityReducer,
  },
});

export default store;
