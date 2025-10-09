import React from 'react';
import ErrorApp from "./../../assets/App-Error.png";
import About from '../About/About';
import { useNavigate, Link } from 'react-router-dom'; // ADD Link import


const NotFound = () => {

 const navigate = useNavigate();

    return (
    <div className='w-4/12 mx-auto p-15 space-y-5 ' >
    <img src={ErrorApp} alt="" />
     <h1 className='font-bold text-4xl text-[#001931] text-center'>OPPS!! APP NOT FOUND</h1>
    <p className='text-[#627382] text-center'>The App you are requesting is not found on our system.  please try another apps.</p>    
                  
    <div className='flex justify-center'>     
              
    <button onClick={() => navigate(-1)}  className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center text-white'>Go back</button>
             </div>
              </div>)}
;

export default NotFound;