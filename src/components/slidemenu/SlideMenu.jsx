import styled from "styled-components";
import { BsStar, BsBank, BsBrightnessLow, BsBuilding, BsBullseye,
    BsEasel, BsFlower2, BsHouseDoor, BsShopWindow, BsSnow, BsTree,
         } from 'react-icons/bs';
import { FaFortAwesome, FaUnsplash, FaArchway, FaStarOfDavid, FaMountain } from 'react-icons/fa'
import { MdDirectionsBoat, MdBeachAccess, MdBungalow, MdOutlineKitesurfing } from 'react-icons/md'
import { GiIsland } from 'react-icons/gi'

const SlideMenu = () => {


    return (
        <Category>
            <StBtn>
                <BsStar className="icon"/><br />
                기상천외한 숙소
            </StBtn>
            <StBtn>
                <BsTree className="icon" /><br />
                국립공원
            </StBtn>
            <StBtn>
                <MdBungalow className="icon"/><br />
                통나무집
            </StBtn>
            <StBtn>
                <GiIsland className="icon"/><br />
                섬
            </StBtn>
            <StBtn>
                <MdBeachAccess className="icon"/><br />
                해변 근처
            </StBtn>
            <StBtn>
                <BsEasel className="icon"/><br />
                컨테이너하우스
            </StBtn>
            <StBtn>
                <BsSnow className="icon"/><br />
                북극
            </StBtn>
            <StBtn>
                <FaStarOfDavid className="icon"/><br />
                상징적 도시
            </StBtn>
            <StBtn>
                <FaArchway className="icon"/><br />
                캐슬
            </StBtn>
            <StBtn>
                <MdDirectionsBoat className="icon"/><br />
                보트
            </StBtn>
        </Category>
    )
}

export default SlideMenu

const Category = styled.div`
    text-align: center;
    
`

const StBtn = styled.button`
    cursor: pointer;
    border: none;
    background: #ffffff;
    color: #767676;
    font-size: 12px;
    margin: 20px;
    .icon {
        font-size: 25px;
        margin-bottom: 8px;
    }
    &:after{
        margin-top: 20px;
        display:block;
        content: '';
        border-bottom:solid 2px #767676;
        transform: scaleX(0);
        transition: transform;
    }
    &:hover{
        color: hsl(0, 0%, 13%);
    }
    &:hover:after{
        transform: scaleX(1);
    }
`

