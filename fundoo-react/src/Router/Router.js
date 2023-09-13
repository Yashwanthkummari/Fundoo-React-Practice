import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../pages/signup/SignUp";

import Login from "../pages/signin/Login";
import Dashboard from "../Components/Dashboard/Dashboard";
import AuthRoute from "./AuthRoute";
import Protectedroute from "./ProtectedRoute";

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<AuthRoute><Login/></AuthRoute>} />
                    <Route path={"/SignUp"} element={<AuthRoute><Register /></AuthRoute>} />
                    <Route path={"/dashboard"} element={<Protectedroute><Dashboard /></Protectedroute>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router