// components/Layout/HomeLayout.jsx
import React from 'react';
import SideBar from '../SideBar/SideBar';
import Header from '../sharedcomponents/Header/Header';
import Footer from '../sharedcomponents/Footer/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = ({ children }) => {
  console.log(children)
    return (
        <div className="AdminHome-container">
            <div className="row">
                <SideBar />
                <div className="custom-col-2 p_0">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
