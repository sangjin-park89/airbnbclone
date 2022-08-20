import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     ids: ['review1', 'review2'],
//     entities: {
//         "review1" : {
//             "username" : "",
//             "review" : "",
//             "reviewId": "review1",
//             "modifiedAt": "2020-04-09T19",
//             "postId": ""
//         },
//         "review1" : {
//             "username" : "",
//             "review" : "",
//             "reviewId": "review2",
//             "modifiedAt": "2020-04-09T19",
//             "postId": ""
//         },
//     }
// }

const initialState = {
    reviews : [
        {
            "username": "user1",
            "review": "사장님이 맛있고 밥이 친절해요",
            "reviewId": "review1",
            "modifiedAt": "2020-04-09",
            "postId": "123456"
        },
        {
            "username": "user2",
            "review": "맛집입니다",
            "reviewId": "review2",
            "modifiedAt": "2020-04-19",
            "postId": "456123"
        },
        {
            "username": "user3",
            "review": "강아지가 귀여웠어요",
            "reviewId": "review3",
            "modifiedAt": "2020-05-29",
            "postId": "5584216"
        }
    ]
}

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => {
            const { reviewId } = action.payload;
            const { entity } = action.payload.reviewId;
            // immer 동작 원리상 이게 맞나? 
            // immer 라이브러리 produce 함수 참조
            state.ids.push(reviewId);
            state.entities.assign(entity);
            // return (state) => { 
            // state.ids.push(reviewId)
            // state.entities.assign(entity)
            // }
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