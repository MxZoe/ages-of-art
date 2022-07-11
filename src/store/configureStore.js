import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./cards";
import api from "./middleware/generalApi";

export default function store() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
    })
}