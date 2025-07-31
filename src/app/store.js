import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import cityReducer from "../features/citySlice";
import orderReducer from "../features/orderSlice";
import companyCarReducer from "../features/companyCar";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  city: cityReducer,
  companyCar: companyCarReducer,
  order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
export const persistor = persistStore(store);
