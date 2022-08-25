import styled from "styled-components";
import { FaArchway } from 'react-icons/fa'
import { MdPeopleOutline, MdOutlineCabin } from 'react-icons/md'
import { RiAncientGateLine, RiAncientPavilionLine } from 'react-icons/ri'



// BiChevronLeftCircle()
const SlideMenu = () => {

    return (
        <Category>
            <FlexBox>
                
                <StBtn>
                    <MdOutlineCabin className="icon"/><br />
                    통나무집
                </StBtn>
                <StBtn>
                    <FaArchway className="icon"/><br />
                    캐슬
                </StBtn>
                <StBtn>
                    <RiAncientGateLine className="icon"/><br />
                    한옥
                </StBtn>
                <StBtn>
                    <RiAncientPavilionLine className="icon" /><br />
                    료칸
                </StBtn>
                <StBtn>
                    <MdPeopleOutline className="icon"/><br />
                    쉐어하우스
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
    /* text-align: center; */
`


const StBtn = styled.button`
    cursor: pointer;
    flex: none;
    border: none;
    background: #ffffff;
    color: #767676;
    font-size: 12px;
    margin: 10px 20px 0 20px;
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

