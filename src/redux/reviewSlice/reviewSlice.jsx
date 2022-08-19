import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const reviewAdapter = createEntityAdapter({
    selectId: (review) => review.postid,
    sortComparer: (a,b) => a.title.localeCompare(b.title),
})

export const reviewSlice = createSlice({
    name: 'review',
    initialState: reviewAdapter.getInitialState(),
    reducers: {
        load: (state, action) => {

        },
        add: (state, action) => {

        },
        update: (state, action) => {

        },
        delete: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { load, add, update } = reviewSlice.action ;

export default reviewSlice.reducer;