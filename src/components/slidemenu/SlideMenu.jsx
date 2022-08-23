import styled from "styled-components";
import { BsStar, BsEasel, BsSnow, BsTree } from 'react-icons/bs';
import { BiPyramid } from 'react-icons/bi'
import { FaArchway, FaStarOfDavid } from 'react-icons/fa'
import { MdDirectionsBoat, MdPeopleOutline, MdSnowboarding, MdOutlineBeachAccess, MdOutlineCabin } from 'react-icons/md'
import { GiIsland } from 'react-icons/gi'
import { RiAncientGateLine, RiAncientPavilionLine } from 'react-icons/ri'



// BiChevronLeftCircle()
const SlideMenu = () => {

    return (
        <Category>
            <FlexBox>
                               
                <StBtn>
                    <BsStar className="icon"/><br />
                    기상천외한 숙소
                </StBtn>
                <StBtn>
                    <BsTree className="icon" /><br />
                    국립공원
                </StBtn>
                <StBtn>
                    <MdOutlineCabin className="icon"/><br />
                    통나무집
                </StBtn>
                <StBtn>
                    <GiIsland className="icon"/><br />
                    섬
                </StBtn>
                <StBtn>
                    <MdOutlineBeachAccess className="icon"/><br />
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
                    하우스 보트
                </StBtn>
                <StBtn>
                    <RiAncientGateLine className="icon"/><br />
                    한옥
                </StBtn>
                <StBtn>
                    <BiPyramid className="icon" /><br />
                    사막
                </StBtn>
                <StBtn>
                    <RiAncientPavilionLine className="icon" /><br />
                    료칸
                </StBtn>
                <StBtn>
                    <MdPeopleOutline className="icon"/><br />
                    쉐어하우스
                </StBtn>
                <StBtn>
                    <MdSnowboarding className="icon"/><br />
                    스키를 탄 채로 출입 가능
                </StBtn>
                
            </FlexBox>
        </Category>
    )
}

export default SlideMenu

const Category = styled.div`
    text-align: center;

    
    
`

const FlexBox = styled.div`
    .styles-module_carousel-base__3keqD {
        font-size: 25px;
        color: #767676;
        /* margin-top: 10px; */
        &:hover{
            color: #484848;
            font-size: 26px;
        }
    }
    
`


const StBtn = styled.button`
    cursor: pointer;
    flex: none;
    border: none;
    background: #ffffff;
    color: #767676;
    font-size: 12px;
    margin: 20px 20px 0 20px;
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

