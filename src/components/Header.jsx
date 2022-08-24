import React from "react";
import styled from "styled-components";
import { TbBrandAirbnb } from 'react-icons/tb'
import { FaUserCircle } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'

function Header(params) {
    return (
        <Container>
            <Logo>
                <TbBrandAirbnb className="icon" />
                <span className="logo_name">airbnb</span>
            </Logo>
            <div></div>
            <Posting>호스트 되기 </Posting>
            <DropDown>
                <HiMenu className="icon" />
                <FaUserCircle onClick="menu" className="icon">
                    <DropMenu href="#">회원가입</DropMenu>
                    <DropMenu href="#">로그인</DropMenu>
                    <DropMenu href="#">숙소 호스팅 되기</DropMenu>
                    <DropMenu href="#">체험 호스트하기</DropMenu>
                    <DropMenu href="#">도움말</DropMenu>
                </FaUserCircle>
            </DropDown>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    display: grid;
    height: 80px;
    grid-template-columns: repeat(4, 40% 39% 11% 10%);
    margin: 20px 80px 20px 80px;
    cursor: pointer;
`

const Logo = styled.div`
    display: flex;
    margin-top: 22px;
    font-size: 40px;
    color: hsl(358, 100%, 68%);
    cursor: pointer;
    .logo_name{
        display: grid;
        grid-template-rows: repeat(3, 33% 33% 33%);
        font-size: 25px;
        font-weight: bold;
    }
`

const Posting = styled.button`
    align-items: center;
    height: 40px;
    width: 110px;
    margin-top: 22px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    background-color: #ffffff;
    cursor: pointer;
    &:hover{
        background-color: #f0f0f0;
        
    }
`

const DropDown = styled.div`
    height: 40px;
    width: 80px;
    font-size: 25px;
    margin-top: 22px;
    text-align: center;
    border: solid;
    border-width: 2px;
    border-radius: 20px;
    border-color: #f0f0f0; 
    
    .icon{
        color: #767676;
        margin-left: 3px;
        margin-right: 3px;
    }

    &:hover{
        box-shadow: 1px 1px 1px 1px #d3d3d3;
        transition: all 0.2s;
    }

`

const DropMenu = styled.a`
    display: none;
    position: absolute;
`