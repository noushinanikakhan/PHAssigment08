import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { useNavigation } from 'react-router-dom'; 



const Root = () => {
       const navigation = useNavigation(); 


    return (
    <div>
        <h1>
            <Navbar></Navbar>
            {navigation.state === 'loading' && (
                <div className="fixed inset-0 bg-white bg-opacity-80 flex justify-center items-center z-50">
                    <span className="loading loading-dots loading-xl"></span>
                </div>
            )}
             <Outlet></Outlet>
            <Footer></Footer>
        </h1>
    </div>
    );
};

export default Root;

