import React from 'react';
import PageError from "./../../assets/error-404.png"
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';

const ErrorPage = () => {
    return (
    <div>
        <Navbar/>

     <div className='w-4/12 mx-auto p-15 space-y-5 ' >
        <img src={PageError} alt="" />
        <h1 className='font-bold text-4xl text-[#001931]'>Oops, page not found!</h1>
        <p className='text-[#627382]'>The page you are looking for is not available.</p>
    <div className='flex justify-center'><button className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center text-white'>Go back</button></div>
    </div>
        <Footer/>
    </div>    
    
    
    );
};

export default ErrorPage;

