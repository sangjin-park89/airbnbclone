// import react from 'react';
import styled from 'styled-components';

const login = () => {
    return (
        <Container>
            <LoginBox>
                <h5>로그인</h5>
                <h4>에어비앤비에 오신 것을 환영합니다.</h4>
                <p>닉네임</p>
                <input></input>
                <p>아이디</p>
                <input></input>
                <p>비밀번호</p>
                <input></input>
                <br />
                <StButton>로그인</StButton>
            </LoginBox>
        </Container>
    );
}

export default login

const Container = styled.div`
    display: grid;
    justify-content: center;
    text-align : center;
    min-height: 100vh;
`

const LoginBox = styled.form`
    height : 300px;
    width : 300px;
    padding: 3rem;
    border-radius: 1rem;
`

const StButton = styled.button`
    margin-top : 20px;
`