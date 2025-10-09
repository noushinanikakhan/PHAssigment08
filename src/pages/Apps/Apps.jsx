import React, { useEffect, useState } from 'react';
import Downloadsign from "./../../assets/Downloadsign.png"
import Star from "./../../assets/Star.png"
import App from '../App/App';


const Apps = ({data}) =>{

const [allApps, setAllApps] = useState ([]);

// useEffect (() => {
//     fetch("AppsData.json")
//     .then (res=> res.json ())
//     .then (data => {
//         setAllApps (data)
//     })
// }, [])


    return (
        <div>
    <div className='flex flex-col items-center p-4'>
        <h1 className='font-bold text-xl md:text-4xl text-[#001931] '>Trending Apps</h1>
        <p className='text-xs md:text-sm text-[#627382] p-2'>Explore All Trending Apps on the Market developed by us</p>

    {/* <div>
        <button className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white'>Show All</button> 
    </div> */}
    </div>
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-5'>
    {
      data.map((singleApp)=><App key={singleApp.id} singleApp={singleApp}></App>)
    }
       </div>



        </div>
    );
};

export default Apps;

