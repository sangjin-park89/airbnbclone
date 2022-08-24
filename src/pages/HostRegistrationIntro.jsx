import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa"
import "../style/dist/css/main.css"
const HostRegistrationIntro = () => {
    const navigate = useNavigate()

    const onSubmitHandler = () => {
        navigate("../price")
    }


    return (
        <div className="intro-container">
            <div className="intro-movie">
                <Link to="/">
                    <div className="intro-logo">
                        <FaAirbnb />
                    </div>
                </Link>
                <video
                    autoPlay="autoplay" muted="muted">
                    <source 
                        src="https://a0.muscache.com/v/8b/04/8b0456c7-13f8-54bc-889a-7cf549f144a3/8b0456c713f854bc889a7cf549f144a3_4000k_1.mp4"
                        type="video/mp4"
                        />
                </video>
                {/* <div className="intro-leftfooter">
                    <span>
                        <button>동영상 전체 시청하기</button>
                        <button>재생</button>
                    </span>
                    
                </div> */}
            </div>

            <div className="intro-content">
                <div className="intro-rightheader">
                        <Link to="/">
                            <button className="intro-button">나가기</button>
                        </Link>
                </div>
                <div className="intro-text">
                    <div className="intro-texttitle">간단한 10단계로 호스팅 시작하기</div>
                    <br />
                    <div>에어비앤비 호스트가 되어보세요. 에어비앤비에서 모든 과정을 도와드립니다.</div>
                </div>
                <div className="intro-rightfooter">
                    <Link to="/">
                        <button onClick={onSubmitHandler} className="intro-button">시작하기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HostRegistrationIntro;
