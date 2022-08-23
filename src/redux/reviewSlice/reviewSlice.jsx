import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../api/api";

//정규화된 상태를 제공하는 api
const reviewAdapter = createEntityAdapter({
    selectId: (entity) => entity.reviewId,
    sortComparer: (a, b) => {a.reviewId.localCompare(b.reviewId)}
});

//Thunk 비동기 통신용
export const fetchGetReviews = createAsyncThunk(
    'reviews/fetchGetReviews',
    async () => {
        const response = await apis.get("https://jsonplaceholder.typicode.com/comments");
        return response.data;
    }
)

// const fetchPostReview = createAsyncThunk(
//     'review/fetchPostReview',
//     async (postData) => {
//         const response = await apis.postPostCard(postData)
//         return response.data
//     }
// )

// const fetchRemoveReview = createAsyncThunk(
//     'review/fetchRemoveReview',
//     async (postId) => {
//         const response = await apis.deletePostCard(postId)
//         return response.data
//     }
// )

// 리듀서, 추가 리듀서
export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: reviewAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetReviews.fulfilled, reviewAdapter.setAll)
            .addCase(fetchGetReviews.rejected, () => {})
    }
})

export default reviewSlice.reducer

