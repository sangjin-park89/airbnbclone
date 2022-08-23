import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/postSlice/postSlice"
import reviewReducer from "../redux/reviewSlice/reviewSlice"


const store = configureStore({
    reducer: {
        posts: postReducer,
        reviews: reviewReducer,
    }
})

export default store;