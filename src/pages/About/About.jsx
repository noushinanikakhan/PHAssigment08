import React from 'react';
// import Downloadsign from "./../../assets/Downloadsign.png"
// import Star from "./../../assets/Star.png";
import { useLoaderData } from 'react-router';
import App from '../App/App';



const About = () =>{

const data = useLoaderData ();

    return (
    <div className='p-10'>
        <div className='w-5/12 mx-auto p-3 text-center space-y-4 '><h1 className='font-bold text-4xl text-[#001931]'>Our All Applications</h1>
        <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        <div className='flex items-center justify-between'>
            <h1 className='font-bold text-xl text-[#001931]'>({Array.isArray(data) ? data.length : 0}) Apps Found</h1>
            <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
        </div>


    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-5'>
    {
     (Array.isArray(data)?data:[]).map((singleApp)=><App key={singleApp.id} singleApp={singleApp}></App>)
    }
       </div> 
    </div>
    );
};

export default About;