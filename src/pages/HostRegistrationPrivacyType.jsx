import React from "react";
import { FaAirbnb } from "react-icons/fa"
import { Link } from "react-router-dom";
import registerpage from "../image/registerpage.png"

const HostRegistrationPrivacyType = () => {

    
    return (
        <main className="regi-container">
            <div className="regi-left">
                <div className="regi-logo">
                    <Link to="/"><FaAirbnb /></Link>
                </div>
                <div className="regi-title">
                    <h1>게스트가 머무를 숙소의 종류가 무엇인가요?</h1>
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
                        <button className="regi-rightbtn">공간 전체</button>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">개인실</button>
                    </div>
                    <div className="regi-rightbtncontainer">
                        <button className="regi-rightbtn">다인실</button>
                    </div>
                </div>
                <div>
                    <button>다음</button>
                </div>
            </div>
        </main>
    )
};

export default HostRegistrationPrivacyType;
