import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';


const Root = () => {
    return (
    <div>
        <h1>
            <Navbar></Navbar>
             <Outlet></Outlet>
            <Footer></Footer>
        </h1>
    </div>
    );
};

export default Root;

