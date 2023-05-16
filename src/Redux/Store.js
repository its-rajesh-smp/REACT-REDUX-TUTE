import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer";

const store = configureStore({
    reducer: { authReducer: authReducer.reducer }
})
export default store