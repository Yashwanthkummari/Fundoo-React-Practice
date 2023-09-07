import React from "react";
import axios from "axios";

export const signup = async (obj) =>{
    let response = await axios.post(
           "https://fundoonotes.azurewebsites.net/api/User/Register",
        // "https://localhost:44362/api/User/Register",
        obj
    );
    return response;
};

export const signin =  async(obj) => {
    let response = await axios.post(
        // "https://localhost:44362/api/User/Login",
        "https://fundoonotes.azurewebsites.net/api/User/Login",

        obj
    );
    return response;
};