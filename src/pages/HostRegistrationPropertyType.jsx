import React from "react";
import { FaAirbnb } from "react-icons/fa"
import { Link } from "react-router-dom";
import registerpage from "../image/registerpage.png"

const HostRegistrationPropertyType = () => {

    
    return (
        <main className="regi-container">
            <div className="regi-left">
                <div className="regi-logo">
                    <Link to="/"><FaAirbnb /></Link>
                </div>
                <div className="regi-title">
                    <h1>다음 중 숙소를 가장 잘 설명하는 문구는 무엇인가요?</h1>
                </div>
            </div>
            <div className="regi-rightheader">
                <div className="regi-rightheader-container">
                    <button>슈퍼호스트에게 물어보기</button>
                    <button>도움말</button>
                    <button>저장 및 나가기</button>
                </div>
            </div>
            <div className="regi-rightcontent">
                <div className="regi-rightcontentcontainer">
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">집</button>
                        <span>단독 또는 연립주택입니다.</span>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">통나무집</button>
                        <span>목재 등의 천연재료로 자연 속에 지은 집입니다.</span>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">저택</button>
                        <span>널찍한 실내외 공간, 정원, 수영장 등을 갖춘 고급 주택입니다.</span>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">타운하우스</button>
                        <span>여러 층으로 된 연립주택으로 옆 세대의 건물과 붙어 있으며 야외 공간을 공유하기도 합니다.</span>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">전원주택</button>
                        <span>시골이나 호숫가, 해변가에 지어진 아담한 주택입니다.</span>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">방갈로</button>
                        <span>넓은 현관과 박공 지붕을 갖춘 단층 주택입니다.</span>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">복토 주택</button>
                    </div>
                </div>
                <div>
                    <button>다음</button>
                </div>
            </div>
        </main>
    )
};

export default HostRegistrationPropertyType;
