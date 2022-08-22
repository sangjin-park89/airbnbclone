import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "../redux/reviewSlice/reviewSlice"
const store = configureStore({
    reducer: {
        reviews: reviewReducer,
    }
})

export default store;