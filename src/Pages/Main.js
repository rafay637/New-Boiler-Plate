import { Avatar, Typography } from "@mui/material";
import { Signout, database, checkUser } from "../Config/firebasemethods";
import { onValue, ref, set, push } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
function Main() {
    const params = useParams();
    const location = useLocation();
    let data = location.state;
    console.log(data);
    const navigate = useNavigate();
    useEffect(() => {
        checkUser()
            .then((res) => {
                console.log(res);
                if (params == res) {

                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <Navbar
                useravatar={location.state.avatar}
                usertitlename={location.state.username}
            />
        </div>
    );
}

export default Main;
