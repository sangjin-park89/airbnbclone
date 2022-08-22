import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apis } from "../api/api";

function FetchTest() {
    const review = useSelector(state => state.reviews);
    console.log("state안쪽 한번 보자", review);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch()
    },[])

    return (
        <div>
            hi!
        </div>
    )
}

export default FetchTest;