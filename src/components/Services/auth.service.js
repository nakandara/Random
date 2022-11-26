import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Config from '../../config'
import * as types from '../../config'


const API_URL = types.REACT_APP_BASE_URL;

const signup = async (userName, password) => {
    const response = await axios
        .post(API_URL + "/create", {
            userName,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const Login = async (userName, password) => {

    //  const {user,setUser} = useContext(userAuthContext)
    const response = await axios
        .post(API_URL + "/login", {
            userName,
            password,
        });

    if (response.data.token) {

        localStorage.setItem("user", JSON.stringify(response.data));
        //  setUser(response.data.token)
    }
    return response.data;
};


const logout = () => {
    localStorage.removeItem("user");

};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
const authService = {
    signup,
    Login,
    logout,
    getCurrentUser,
};
export default authService;