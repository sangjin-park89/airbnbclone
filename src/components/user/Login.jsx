// import { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput'
import { apis } from '../../api/api';

/** 컴포넌트 이름은 대문자로  */ 
const Login = () => {
    // 닉네임, 아이디, 비밀번호 확인
    // const [onId, setOnId] = UseInput()
    // const [onPassword, setOnPassword] = UseInput()
    const userId = useInput();
    const userPassword = useInput();
    // const [value, setValue] = useState({
    //     id: "",
    //     password: "",
    // });
    
    // onChangeHandler = (e) = {
    //     setValue((prev) => ({...prev, [e.target.name]:e.target.value}))
    // }
    
    // const { userId.state, userId.onChange } = useInput();


    const body = {
        userUsername : userId.state,
        userPassword : userPassword.state,
    }

    const onSubmithandler = async (e) => {
        e.preventDefault()
        console.log(body)
        try{
            const response = await apis.login(
                {
                    userUsername : userId.state,
                    userPassword : userPassword.state
                }
            )
            // alert("로그인 성공")
            console.log(response);
        } catch (error) {
            console.log(error);
            // alert("로그인 다시시도")
        }
    }
    
    return (
        <Container>
            <LoginBox onSubmit={onSubmithandler}>
                <h5>로그인</h5>
                <h4>에어비앤비에 오신 것을 환영합니다.</h4>
                {/* <p>닉네임</p>
                <input onChange={setOnNickName}></input> */}
                <p>아이디</p>
                <input type='text' {...userId}></input>
                {/* <input type='text' onChange={setOnId}></input> */}
                <p>비밀번호</p>
                <input type='password' {...userPassword}></input>
                {/* <input type='password' onChange={setOnPassword}></input> */}
                <br />
                <StButton>로그인</StButton>
            </LoginBox>
        </Container>
    );
}

export default Login;

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