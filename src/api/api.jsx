import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        accept: 'application/json',
    },
});

export const apis = {
    //PostCard 불러오기 - api명세에 해당하는 값 넣어두기
    getPostCard: () => api.get('/main'),
    //Detail Page 정보 불러오기 - 예시, 이것도 알아보기 쉽게 필요한 값으로 바꿔두기
    getPostCardDetail: (postId) => api.get(`/main/${postId}`),
    // ... ... 
}