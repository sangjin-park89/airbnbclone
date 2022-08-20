import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from '../../api/api';


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await apis.getAllPostCard();
    return response.data
})

const initialState = {
    posts : []
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.posts.push(action.payload)
        },
        updatePost(state, action) {
            const { postId, contents } = action.payload;
            const selectedPost = state.posts.find( id => id === postId );
            if(selectedPost){
                selectedPost.contents = contents
                // ... ...
            }
        },
        deletePost(state, action) {
            const {id} = action.payload;
            const selectedPost = state.posts.find( id => id == postId);
            if(selectedPost) state.filter(post => post.postId !== id);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {

            })
            .addCase(fetchPosts.rejected, (state, action) => {
                
            })
    }
})

export const { addPost, updatePost, deletePost } = postSlice.actions

export default postSlice.reducer