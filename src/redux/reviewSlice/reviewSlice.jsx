import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ids: ['review1', 'review2'],
    entities: {
        "review1" : {
            "username" : "",
            "review" : "",
            "reviewId": "review1",
            "modifiedAt": "2020-04-09T19",
            "postId": ""
        },
        "review1" : {
            "username" : "",
            "review" : "",
            "reviewId": "review2",
            "modifiedAt": "2020-04-09T19",
            "postId": ""
        },
    }
}

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => {
            state.push(action.payload)
        },
        updateReview: (state, action) => {
            const { reviewId } = action.payload;
            state.entities[reviewId] = action.payload;
            state.ids.push(action.payload.reviewId);
        },
        deleteReview: (state, action) => {
            const { id } = action.payload;
            const target = state.ids.find(id === action.payload.id)

        }
    }
})

export const { addReview, updateReview, deleteReview } = reviewSlice.actions

export default reviewSlice.reducer