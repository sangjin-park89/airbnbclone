import React from "react";
import { FaAirbnb } from "react-icons/fa"
import { Link, useOutletContext } from "react-router-dom";
import registerpage from "../image/registerpage.png"

const HostRegistrationPropertyTypeGroup = () => {
    const [submitValue, setSubmitValue] = useOutletContext();
    
    return (
        <main className="regi-container">
            <div className="regi-left">
                <div className="regi-logo">
                    <Link to="/"><FaAirbnb /></Link>
                </div>
                <div className="regi-title">
                    <h1>호스팅할 숙소 유형을 알려주세요</h1>
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
                        <button className="regi-rightbtn">아파트</button>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">주택</button>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">별채</button>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">독특한 숙소</button>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">B&B</button>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">부티크 호텔</button>
                    </div>
                </div>
                <div>
                    <button>다음</button>
                </div>
            </div>
        </main>
    )
};

export default HostRegistrationPropertyTypeGroup;
