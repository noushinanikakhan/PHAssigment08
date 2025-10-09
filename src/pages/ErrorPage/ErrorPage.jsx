import React from 'react';
import PageError from "./../../assets/error-404.png"

const ErrorPage = () => {
    return (
    <div className='w-4/12 mx-auto p-15 space-y-5 ' >
        <img src={PageError} alt="" />
        <h1 className='font-bold text-4xl text-[#001931]'>Oops, page not found!</h1>
        <p className='text-[#627382]'>The page you are looking for is not available.</p>
        <button className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>Go back</button>
    </div>
    );
};

export default ErrorPage;

