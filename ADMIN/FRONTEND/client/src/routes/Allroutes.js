// routes/Allroutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Auth/Login/Login.jsx';
import ChangePassword from '../components/Auth/ChangePassword/ChangePassword.jsx';
import ForgotPassword from '../components/Auth/ForgotPasword/ForgotPassword.jsx';
import OTP from '../components/Auth/OTP/Otp.jsx';
import Home from '../components/home/Home.jsx';
import HomeContainer from '../components/HomeContainer/HomeContainer.jsx';
import Notification from '../components/Notification/Notification.jsx';
import Dashboard from '../components/dashboard/Dashboard.jsx';
// import HomeLayout from '../components/Layout/HomeLayout.jsx';

const Allroutes = () => {
    const auth_login = [
        { path: "/login", element: <Login /> },
        { path: "/forgot_password", element: <ForgotPassword /> },
        { path: "/otp", element: <OTP /> },
        { path: "/change_password", element: <ChangePassword /> }
    ]
    const custom_routes = [
        { path: "/notification", element: <Notification /> },
    ];

    return (
        <Routes>
            {auth_login.map((auth_route, index) => {
                return (
                    <Route key={(index)} path={auth_route.path} element={auth_route.element} />
                )
            })}
            <Route path="/" element={<HomeContainer />}>
                <Route index element={<Dashboard />} />
                {custom_routes.map((route, index) => {
                    return (
                        <Route key={index} path={route.path} element={route.element} />
                    )
                })}
            </Route>
        </Routes>
    );
};

export default Allroutes;
