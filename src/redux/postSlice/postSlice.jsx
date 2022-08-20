import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const postsAdapter = createEntityAdapter({
    selectId: (post) => post.postId,
    sortComparer: (a,b) => a.postId.localeCompare(b.postId),
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        // Async로 모든 post를 받아오는 요청과 그걸 state에 넣는 로직 작성 필요
        // createEntityAdapter로 nomalization된 state 필드 만들어 수정하기
        addPost: (state, action) => {
            state.push(action.payload)
        },
        updatePost: (state, action) => {
            //수정 필요
            const target = state.find(postId === action.payload.postId)
            return target.content
        },
        deletePost: (state, action) => {
            state.filter(state.postId !== action.payload.postId)
        }
    }
})

export const { addPost, updatePost, deletePost } = postsSlice.actions;

export default postsSlice.reducer
