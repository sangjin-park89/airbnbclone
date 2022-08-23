import React from "react";
import { FaAirbnb } from "react-icons/fa"
import { Link } from "react-router-dom";
import registerpage from "../image/registerpage.png"

const HostRegistrationFloorPlan = () => {

    
    return (
        <main className="regi-container">
            <div className="regi-left">
                <div className="regi-logo">
                    <Link to="/"><FaAirbnb /></Link>
                </div>
                <div className="regi-title">
                    <h1>숙소에서 맞이할 최대 인원수를 알려주세요.</h1>
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
                    <div className="regi-countcontainer">
                        <div className="regi-countflex">
                            <h3>게스트</h3>
                            <div>
                                <button>-</button>
                                <span></span>
                                <button>+</button>
                            </div>
                        </div>
                        <div className="regi-countflex">
                            <h3>침대</h3>
                            <div>
                                <button>-</button>
                                <span></span>
                                <button>+</button>
                            </div>
                        </div>
                        <div className="regi-countflex">
                            <h3>침실</h3>
                            <div>
                                <button>-</button>
                                <span></span>
                                <button>+</button>
                            </div>
                        </div>
                        <div className="regi-countflex">
                            <h3>욕실</h3>
                            <div>
                                <button>-</button>
                                <span></span>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button>다음</button>
                </div>
            </div>
        </main>
    )
};

export default HostRegistrationFloorPlan;
