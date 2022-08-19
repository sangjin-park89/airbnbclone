// import react from 'react';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const Register = () => {
    // 닉네임, 아이디, 비밀번호 확인
    const [nickName, setNickName] = useState('')
    const [id, setId] = useState('')

    // 오류 메시지 상태 저장
    const [nickNameMessge, setNickNameMessege] = useState('')
    const [idMessge, setIdMessege] = useState('')

    // 유효성 검사
    const [isNickName, setIsNickName] = useState(false)
    const [isId, setIsId] = useState(false)

    // 닉네임 조건 함수
    const onChangeNickName = useCallback((e) => {
        setNickName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 5) {
            setNickNameMessege('2글자 이상 5글자 미만으로 입력해주세요 :(')
            setIsNickName(false)
        } else {
            setNickNameMessege('올바른 닉네임 형식입니다 :)')
            setIsNickName(true)
        }
    }, [])

    // 아이디 조건 함수
    const onChangeId = useCallback((e) => {
        setId(e.target.value)
        if(e.target.value.length < 4 || e.target.value.length > 8) {
            setIdMessege('4글자 이상 8글자 미만으로 입력해주세요 :(')
            setIsId(false)
        } else {
            setIdMessege('올바른 아이디 형식입니다 :)')
            setIsId(true)
        }
    }, [])

    return (
        <Container>
            <LoginBox>
                <h5>회원가입</h5>
                <h4>에어비앤비에 오신 것을 환영합니다.</h4>
                <p>닉네임</p>
                <input type="text" typeName="name" placeholder='닉네임을 입력하세요' onChange={onChangeNickName} />
                <br />
                {nickName.length > 0 && isNickName ? 
                <spen>{nickNameMessge}</spen>
                 : 
                <spen>{nickNameMessge}</spen>
                }

                <p>아이디</p>
                <input type="text" typeName="name" placeholder='아이디를 입력하세요' onChange={onChangeId} />
                <br />
                {id.length > 0 && isId ? 
                <spen>{idMessge}</spen>
                 : 
                <spen>{idMessge}</spen>
                }

                <p>비밀번호</p>
                <input></input>
                <p>비밀번호 확인</p>
                <input></input>
                <br />
                <StButton>회원가입</StButton>
            </LoginBox>
        </Container>
    );
}

export default Register

const Container = styled.div`
    display: grid;
    justify-content: center;
    text-align : center;
    min-height: 100vh;
`

const LoginBox = styled.form`
    height : 300px;
    width : 400px;
    padding: 3rem;
    border-radius: 1rem;
`

const StButton = styled.button`
    margin-top : 20px;
`