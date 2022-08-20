// import react from 'react';
import styled from 'styled-components';
import UseInput from '../../hooks/useInput';

const login = () => {
    // 닉네임, 아이디, 비밀번호 확인
    // const [onNickName, setOnNickName] = UseInput()
    const [onID, setOnID] = UseInput()
    const [onPW, setOnPW] = UseInput()
    
    const body = {
        // 닉네임?
        userUsername : onID,
        userPassword : onPW
    }
    console.log(body)
    
    return (
        <Container>
            <LoginBox>
                <h5>로그인</h5>
                <h4>에어비앤비에 오신 것을 환영합니다.</h4>
                {/* <p>닉네임</p>
                <input onChange={setOnNickName}></input> */}
                <p>아이디</p>
                <input type='text' onChange={setOnID}></input>
                <p>비밀번호</p>
                <input type='password' onChange={setOnPW}></input>
                <br />
                <StButton type='button' onClick={console.log()}>로그인</StButton>
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