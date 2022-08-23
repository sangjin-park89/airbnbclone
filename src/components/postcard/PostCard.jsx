import React from "react";
import "../../style/dist/css/main.css"
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai"

function PostCard({postAddress, postFee, postTitle, imageFiles, reviewStar}) {
    const image = imageFiles;
    console.log(image);
    return (
        <div className="card col-3">
            <div className="card__image">
                <AiOutlineHeart />
                <picture>
                    <img src="" alt="임시 이미지" />
                </picture>
            </div>
            <div className="card__description">
                <div className="description-container">
                    <div>
                        <div className="star-container">
                            <div>
                                <span>{postTitle}</span>
                            </div>
                            <div >
                                <FaStar />
                                <span>{reviewStar}</span>
                            </div>
                        </div>
                        <div>
                            <span>5,275km</span>
                        </div>
                        <div>
                            <span>7월 2일~8일</span>
                        </div>
                        <div>
                            <span>{postFee}</span>
                        </div>
                        <div>
                            <span>{postAddress}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostCard;