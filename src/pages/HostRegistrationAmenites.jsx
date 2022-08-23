import React from "react";

const HostRegistrationAmenities = () => {
    return (
        <main className="regi-container">
            <div className="regi-left">
                <div className="regi-logo">
                    <Link to="/"><FaAirbnb /></Link>
                </div>
                <div className="regi-title">
                    <h1>숙소 편의시설 정보를 추가해주세요.</h1>
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
                    <div>
                        <h3>특별히 내세울만한 편의시설이 있나요?</h3>
                    </div>
                    <div>
                        <h3>다음 인기 편의시설이 있나요?</h3>
                    </div>
                    <div>
                        <h3>다음 안전 물품이 있나요?</h3>
                    </div>
                </div>
                <div>
                    <button>다음</button>
                </div>
            </div>
        </main>
    )
};

export default HostRegistrationAmenities;
