import React from "react";
import { FaAirbnb } from "react-icons/fa"
import { Link } from "react-router-dom";
import registerpage from "../image/registerpage.png"

const HostRegistrationDescription = () => {

    
    return (
        <main className="regi-container">
            <div className="regi-left">
                <div className="regi-logo">
                    <Link to="/"><FaAirbnb /></Link>
                </div>
                <div className="regi-title">
                    <h1>숙소 위치는 어디인가요?</h1>
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
                        <form>
                            <input type="text" placeholder="숙소 이름을 입력해주세요" />
                            <label htmlFor="description"></label>
                            <input 
                                type="textarea" 
                                placeholder="편안함을 자랑하는 이곳에서 즐거운 시간을 보내실 수 있을 것입니다." 
                                id="description" />
                        </form>
                    </div>
                </div>
                <div>
                    <button>다음</button>
                </div>
            </div>
        </main>
    )
};

export default HostRegistrationDescription;
