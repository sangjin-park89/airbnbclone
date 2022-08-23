import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../api/api";

const initialState = {};

// thunk
const fetchGetMainPosts = createAsyncThunk(
    'posts/fetchGetMainPosts',
    async () => {
        const response = await apis.getAllPostCard();
        return response.data;
    }
)




export const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers: {
        setAllPosts(state, action){
            state.posts = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchGetMainPosts.fulfilled, (state, action) => {
            state.posts.push(action.payload);
        })
    }
})

export const { setAllPosts } = postsSlice.actions;

export default postsSlice.reducer