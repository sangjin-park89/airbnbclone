import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        accept: 'application/json',
    },
});

const apiMultiType = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
    headers: {
        'content-type': 'multitype/form-data'
    }
})

export const apis = {
    //로그인
    login: (username, password) => api.post('/user/login', { username, password }),
    // 회원가입
    signup: (username, nickname, password) => api.post('/user/signup', {username, nickname, password}),
    // 아이디 중복 검사 (추가요소)

    //게시글 작성 ??? 수정 소요 있음
    postboard: () => api.post('/api/posts', { title, content }),
    // ...... 게시글 작성 관련 로직은 추후에 추가

    // 메인 페이지 조회
    getAllPostCard: () => api.get('/api/posts'),

    //Detail Page 정보 불러오기 - 예시, 이것도 알아보기 쉽게 필요한 값으로 바꿔두기
    getPostCardDetail: (postId) => api.get(`/main/${postId}`),
    // ... ... 
    // 이미지 파일 전송하기
    postImage: (formdata) => apiMultiType.post('api/image', { formdata }),

    // 후기 작성 - 동적 라우팅 주소 확인하기
    postReview: (review) => api.post(`/api/p,osts/${postId}/reviews`, { review }),

    // 후기 수정 - 동적 라우팅 주소 확인하기
    putReview: (review) => api.put(`/api/posts/${postId}/${reviewId}`, {review}),

    // 후기 삭제 - ||
    deleteReview: (review) => api.delete(`/api/posts/${postId}/${reviewId}`, {review})
}