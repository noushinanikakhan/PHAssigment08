import React, { useEffect, useState } from 'react';
import Downloadsign from "./../../assets/Downloadsign.png"
import Star from "./../../assets/Star.png"


const Apps = () =>{

const [allApps, setAllApps] = useState ([]);

useEffect (() => {
    fetch("AppsData.json")
    .then (res=> res.json ())
    .then (data => {
        console.log (data)
    })
}, [])


    return (
        <div>
    <div className='flex flex-col items-center p-4'>
        <h1 className='font-bold text-xl md:text-4xl text-[#001931] '>Trending Apps</h1>
        <p className='text-xs md:text-sm text-[#627382] p-2'>Explore All Trending Apps on the Market developed by us</p>
    <div className='flex '>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Forest: Focus for Productivity</h2>
    <div className=" flex w-11/12 items-center justify-between">
      <button className="btn text-[#00D390]">
        <img src={Downloadsign} alt="" />
        9M</button>
      <button className="btn text-[#FF8811]">
        <img src={Star} alt="" />
        5</button>
    </div>
  </div>
</div>
    </div>

    <div>
        <button className='btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white'>Show All</button> 
    </div>
    </div>
        </div>
    );
};

export default Apps;

