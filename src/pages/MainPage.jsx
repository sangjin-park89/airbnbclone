import React, { useEffect, useId, useState } from "react";
import { apis } from "../api/api";
import { useAsync } from "../hooks/useAsync";
import PostCard from "../components/postcard/PostCard";
import { Link } from "react-router-dom";
import "../style/dist/css/main.css"
//
import Header from "../components/Header";
import SlideMenu from "../components/slidemenu/SlideMenu"


function MainPage() {
    const {loading, error, value: postCards } = useAsync(apis.getAllPostCard);
    
    if(loading) return <div>...로딩 중...</div>
    if(error) return <div>{error}</div>

    const postCardData = postCards.data.data;

    return (
        <>
            <Header />
            <SlideMenu />
            <div className="flex-container">
                {postCardData.map((each) => {
                    return (
                        <div className="flex-item">
                            <PostCard
                                key={each.postId}
                                postAddress={each.postAddress}
                                postFee={each.postFee}
                                postTitle={each.postTitle}
                                imageFiles={each.imageFiles}
                                reviewStar={each.reviewStar}
                                />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MainPage;